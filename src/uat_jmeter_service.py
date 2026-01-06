import sys
import os
# 将项目根目录添加到Python路径
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, project_root)


from flask import Flask, request, jsonify, send_from_directory, make_response
import time
import subprocess
import requests
import json
from werkzeug.utils import secure_filename
from log_utils.log_utils import log_api_call  # 导入日志装饰器

app = Flask(__name__)

# 设置文件保存的基本目录
UPLOAD_FOLDER = r'D:\dify_workflow\jmeter_workspace'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # 确保目录存在

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SERVER_URL'] = 'http://localhost:3900'  # 服务器URL，用于生成报告链接


@app.route('/upload', methods=['POST'])
@log_api_call()  # 添加日志装饰器
def upload_files():
    try:
        # 检查是否有文件在请求中
        if 'files' not in request.files:
            return jsonify({"error": "没有文件被上传"}), 400

        files = request.files.getlist('files')

        if not files or all(f.filename == '' for f in files):
            return jsonify({"error": "没有选择文件"}), 400

        saved_files = []

        # 处理每个文件
        for file in files:
            if file and file.filename:
                # 确保文件名安全
                filename = secure_filename(file.filename)
                # 构造文件保存路径
                file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                # 保存文件（会自动覆盖同名文件）
                file.save(file_path)
                saved_files.append(filename)

        return jsonify({
            "message": "文件上传成功",
            "uploaded_files": saved_files,
            "count": len(saved_files)
        }), 200

    except Exception as e:
        return jsonify({"error": f"文件上传失败: {str(e)}"}), 500


@app.route('/execute_jmeter', methods=['POST'])
@log_api_call()  # 添加日志装饰器
def execute_jmeter():
    try:
        # 获取请求参数
        data = request.get_json()
        concurrency = data.get('threads')
        script_name = data.get('jmx')
        mode = data.get('mode')  # 'single' 或 'distributed'
        duration = data.get('duration')  # 新增参数：压测持续时间

        # 参数校验
        if not all([concurrency, script_name, mode, duration]):
            return jsonify({"error": "缺少必要参数: concurrency, script_name, mode, duration"}), 400

        if mode not in ['single', 'distributed']:
            return jsonify({"error": "mode参数必须是'single'或'distributed'"}), 400

        # 检查脚本文件是否存在
        script_path = os.path.join(app.config['UPLOAD_FOLDER'], script_name)
        if not os.path.exists(script_path):
            return jsonify({"error": f"脚本文件不存在: {script_name}"}), 404

        # 添加调试信息
        print(f"Script path: {script_path}")
        print(f"Script exists: {os.path.exists(script_path)}")

        # 生成结果文件名（去掉脚本文件的后缀名）
        script_basename = os.path.splitext(script_name)[0]
        result_filename = f"{script_basename}_{concurrency}.jtl"
        result_path = os.path.join(app.config['UPLOAD_FOLDER'], result_filename)

        # 构建JMeter命令（使用jmeter.bat） - 修改参数名以匹配JMeter脚本
        if mode == 'single':
            cmd = [
                'jmeter.bat',
                '-n',
                '-t', script_path,
                '-l', result_path,
                f'-Jnum={concurrency}',  # 这个是正确的，与脚本中的${__P(num,)}匹配
                f'-Jduration={duration}'  # 修改这里，将参数名改为duration以匹配脚本
            ]
        else:  # distributed mode
            cmd = [
                'jmeter.bat',
                '-n',
                '-t', script_path,
                '-l', result_path,
                f'-Jnum={concurrency}',  # 这个是正确的
                f'-Jduration={duration}',  # 修改这里
                '-r'
            ]

        # 添加调试信息
        print(f"Command: {' '.join(cmd)}")
        print(f"Working directory: {app.config['UPLOAD_FOLDER']}")

        # 执行JMeter命令
        result = subprocess.run(cmd, capture_output=True, text=True, cwd=app.config['UPLOAD_FOLDER'])

        print(f"Return code: {result.returncode}")
        print(f"Stdout: {result.stdout}")
        print(f"Stderr: {result.stderr}")

        if result.returncode != 0:
            return jsonify({
                "error": "JMeter执行失败",
                "stderr": result.stderr,
                "stdout": result.stdout
            }), 500

        # 读取jmeter.log文件，查找最后一个"summary ="行
        log_file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'jmeter.log')
        summary_line = ""

        if os.path.exists(log_file_path):
            # 尝试不同的编码方式读取文件
            encodings = ['utf-8', 'gbk', 'gb2312', 'latin-1']
            lines = []

            for encoding in encodings:
                try:
                    with open(log_file_path, 'r', encoding=encoding) as log_file:
                        lines = log_file.readlines()
                    break  # 如果成功读取，跳出循环
                except UnicodeDecodeError:
                    continue  # 如果解码失败，尝试下一个编码

            # 从后往前查找最后一个"summary ="行
            for line in reversed(lines):
                if "summary =" in line:
                    summary_line = line.strip()
                    break

        return jsonify({
            "message": "JMeter执行成功",
            "script_name": script_name,
            "concurrency": concurrency,
            "mode": mode,
            "duration": duration,  # 返回新增参数
            "result_file": result_filename,
            "summary": summary_line
        }), 200

    except Exception as e:
        return jsonify({"error": f"执行JMeter时发生错误: {str(e)}"}), 500


@app.route('/generate_report', methods=['POST'])
@log_api_call()  # 添加日志装饰器
def generate_report():
    try:
        # 获取请求参数
        data = request.get_json()
        jmx_name = data.get('jmx')  # jmx名称，不需要包含.jmx后缀
        concurrency = data.get('threads')  # 并发数

        # 参数校验
        if not all([jmx_name.split(".")[0], concurrency]):
            return jsonify({
                "success": False,
                "error": "缺少必要参数: jmx, threads"
            }), 400

        # 拼接jtl文件名称
        jtl_filename = f"{jmx_name.split('.')[0]}_{concurrency}.jtl"
        jtl_file_path = os.path.join(app.config['UPLOAD_FOLDER'], jtl_filename)

        # 检查jtl文件是否存在
        if not os.path.exists(jtl_file_path):
            return jsonify({
                "success": False,
                "error": f"JTL文件不存在: {jtl_filename}"
            }), 404

        # 生成报告目录名称
        report_dir_name = f"{jtl_filename}_report"
        report_dir_path = os.path.join(app.config['UPLOAD_FOLDER'], report_dir_name)

        # 确保报告目录存在，如果不存在则创建
        os.makedirs(report_dir_path, exist_ok=True)

        # 构建JMeter命令，用于生成报告
        cmd = [
            'jmeter.bat',
            '-g', jtl_filename,
            '-o', report_dir_name
        ]

        # 添加调试信息
        print(f"Report generation command: {' '.join(cmd)}")
        print(f"Working directory: {app.config['UPLOAD_FOLDER']}")

        # 执行JMeter命令
        result = subprocess.run(cmd, capture_output=True, text=True, cwd=app.config['UPLOAD_FOLDER'])

        print(f"Return code: {result.returncode}")
        print(f"Stdout: {result.stdout}")
        print(f"Stderr: {result.stderr}")

        if result.returncode != 0:
            return jsonify({
                "success": False,
                "error": "报告生成失败",
                "stderr": result.stderr,
                "stdout": result.stdout
            }), 500

        return jsonify({
            "success": True,
            "message": "报告生成成功",
            "jtl_file": jtl_filename,
            "report_directory": report_dir_name,
            "report_path": f"/{report_dir_name}"  # 返回相对路径
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"生成报告时发生错误: {str(e)}"
        }), 500


# 用于访问报告的路由
@app.route('/<report_dir_name>')
@log_api_call()  # 添加日志装饰器
def serve_report(report_dir_name):
    try:
        # 确保报告目录名称安全
        safe_report_dir = secure_filename(report_dir_name)

        # 构建报告目录的完整路径
        report_path = os.path.join(app.config['UPLOAD_FOLDER'], safe_report_dir)

        # 检查报告目录是否存在
        if not os.path.exists(report_path) or not os.path.isdir(report_path):
            return jsonify({"error": f"报告目录不存在: {safe_report_dir}"}), 404

        # 检查index.html文件是否存在
        index_file_path = os.path.join(report_path, 'index.html')
        if not os.path.exists(index_file_path):
            return jsonify({"error": "报告目录中未找到index.html文件"}), 404

        # 读取并修改HTML内容
        with open(index_file_path, 'r', encoding='utf-8') as f:
            html = f.read()

        # 修改所有资源路径，添加报告名前缀
        html = html.replace('href="', f'href="/{safe_report_dir}/')
        html = html.replace('src="', f'src="/{safe_report_dir}/')

        # 返回修改后的HTML内容
        response = make_response(html)
        return response
    except Exception as e:
        return jsonify({"error": f"访问报告时发生错误: {str(e)}"}), 500


# 用于加载报告中静态资源的路由
@app.route('/<report_dir_name>/<path:filename>')
@log_api_call()  # 添加日志装饰器
def serve_report_assets(report_dir_name, filename):
    try:
        # 确保报告目录名称安全
        safe_report_dir = secure_filename(report_dir_name)

        # 构建报告目录的完整路径
        report_path = os.path.join(app.config['UPLOAD_FOLDER'], safe_report_dir)

        # 检查报告目录是否存在
        if not os.path.exists(report_path) or not os.path.isdir(report_path):
            return jsonify({"error": f"报告目录不存在: {safe_report_dir}"}), 404

        # 返回请求的静态资源文件
        return send_from_directory(report_path, filename)
    except Exception as e:
        return jsonify({"error": f"加载静态资源时发生错误: {str(e)}"}), 500


# 发送报告链接和性能指标到飞书机器人的接口
@app.route('/send_to_feishu', methods=['POST'])
@log_api_call()  # 添加日志装饰器
def send_to_feishu():
    # 添加等待时间，确保参数准备就绪以免出发重试机制（避免飞书重复收到相同的消息）
    time.sleep(15)
    try:
        # 获取请求参数
        data = request.get_json()
        webhook_url = data.get('webhook_url')  # 飞书机器人的Webhook地址
        report_dir_name = data.get('report_dir_name')  # 报告目录名
        test_summary = data.get('test_summary', '')  # 测试摘要信息（可选）
        duration = data.get('duration')  # 压测时长
        report_name = data.get('report_name')  # 报告名称
        print(f"send_to_feishu: {webhook_url}, {report_dir_name}, {test_summary}, {duration}, {report_name}")

        # 参数校验
        if not all([webhook_url, report_dir_name]):
            return jsonify({"error": "缺少必要参数: webhook_url, report_dir_name"}), 400

        # 改进：确保外部传入的压测时长被正确处理
        # 首先检查从请求参数获取的duration是否有效
        if duration:
            # 确保duration是字符串格式，移除前后空格
            duration = str(duration).strip()
            print(f"从请求参数获取到压测时长: {duration}")
        else:
            duration = "未知"
            print("未从请求参数获取到压测时长")
            # 如果未提供压测时长，尝试从jmeter.log中获取（作为备选方案）
            try:
                log_file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'jmeter.log')
                if os.path.exists(log_file_path):
                    # 尝试不同的编码方式读取文件
                    encodings = ['utf-8', 'gbk', 'gb2312', 'latin-1']
                    lines = []

                    for encoding in encodings:
                        try:
                            with open(log_file_path, 'r', encoding=encoding) as log_file:
                                lines = log_file.readlines()
                            break  # 如果成功读取，跳出循环
                        except UnicodeDecodeError:
                            continue  # 如果解码失败，尝试下一个编码

                    # 查找包含duration或持续时间的行
                    for line in reversed(lines):
                        if '-Jduration=' in line:
                            # 提取duration参数值
                            import re
                            match = re.search(r'-Jduration=(\d+)', line)
                            if match:
                                duration = match.group(1)
                                print(f"从日志文件获取到压测时长: {duration}")
                                break
            except Exception as e:
                print(f"从日志文件获取压测时长失败: {str(e)}")

        # 从报告目录名中提取并发数
        concurrency = "未知"
        try:
            # 报告目录名格式为: {script_name}_{concurrency}.jtl_report
            # 提取 {script_name}_{concurrency}.jtl 部分
            jtl_part = report_dir_name.replace('_report', '')
            # 提取最后一个下划线后的数字作为并发数
            concurrency = jtl_part.split('_')[-1].split('.')[0]
            # 验证是否为数字
            if concurrency.isdigit():
                concurrency = f"{concurrency}"
            else:
                concurrency = "未知"
        except Exception as e:
            print(f"提取并发数失败: {str(e)}")
            concurrency = "未知"

        # 构建报告的完整URL
        report_url = f"{app.config['SERVER_URL']}/{report_dir_name}"

        # 提取性能测试指标
        performance_metrics = ""  # 初始化性能指标文本

        # 修复：正确构建statistics.json文件的完整路径
        # 直接使用app.config['UPLOAD_FOLDER']作为基础路径，确保包含完整的工作目录
        base_path = app.config['UPLOAD_FOLDER']

        # 修复：正确构建路径，避免混合路径分隔符问题
        # 确保使用os.path.join正确构建路径，并且标准化路径分隔符
        stats_json_path = os.path.normpath(os.path.join(base_path, report_dir_name, 'statistics.json'))

        # 添加详细的调试信息
        print(f"UPLOAD_FOLDER配置: {base_path}")
        print(f"报告目录名: {report_dir_name}")
        print(f"构建的statistics.json路径: {stats_json_path}")
        print(f"路径是否存在: {os.path.exists(stats_json_path)}")

        # 增强的路径查找机制
        if not os.path.exists(stats_json_path):
            # 尝试直接从项目结构中查找 - 基于您提供的目录结构
            alternate_path = os.path.normpath(
                os.path.join(r'D:\dify_workflow', 'jmeter_workspace', report_dir_name,
                             'statistics.json'))
            print(f"尝试从项目结构路径查找: {alternate_path}")
            if os.path.exists(alternate_path):
                stats_json_path = alternate_path
                print(f"在项目结构路径中找到文件")

        # 如果路径仍然不存在，尝试另一种可能的路径构建方式
        if not os.path.exists(stats_json_path):
            # 直接使用绝对路径构建
            direct_path = os.path.normpath(f"D:/dify_workflow/jmeter_workspace/{report_dir_name}/statistics.json")
            print(f"尝试直接构建绝对路径: {direct_path}")
            if os.path.exists(direct_path):
                stats_json_path = direct_path
                print(f"在直接构建的绝对路径中找到文件")

        if os.path.exists(stats_json_path):
            try:
                # 尝试不同的编码方式读取statistics.json文件
                encodings = ['utf-8', 'gbk', 'gb2312', 'latin-1']
                stats_data = None

                for encoding in encodings:
                    try:
                        with open(stats_json_path, 'r', encoding=encoding) as f:
                            stats_data = json.load(f)
                        print(f"成功读取statistics.json，使用编码: {encoding}")
                        break  # 如果成功读取，跳出循环
                    except (UnicodeDecodeError, json.JSONDecodeError) as e:
                        print(f"使用编码{encoding}读取失败: {str(e)}")
                        continue  # 如果解码失败，尝试下一个编码

                if stats_data:
                    print(f"成功解析JSON数据: {list(stats_data.keys())}")
                    # 提取Total部分的性能指标
                    if 'Total' in stats_data:
                        total_stats = stats_data['Total']
                        # 格式化性能指标文本，添加并发数和压测时长
                        performance_metrics = "\n" + "性能测试关键指标：\n"
                        performance_metrics += f"- 并发数: {concurrency}\n"
                        # 改进：确保压测时长显示合理
                        if duration and duration != "未知":
                            performance_metrics += f"- 压测时长: {duration}秒\n"
                        else:
                            performance_metrics += "- 压测时长: 未知\n"
                        performance_metrics += f"- 总样本数: {total_stats['sampleCount']}\n"
                        performance_metrics += f"- 错误数: {total_stats['errorCount']}\n"
                        performance_metrics += f"- 错误率: {total_stats['errorPct']:.2f}%\n"
                        performance_metrics += f"- 平均响应时间: {total_stats['meanResTime']:.2f}ms\n"
                        performance_metrics += f"- 中位数响应时间: {total_stats['medianResTime']}ms\n"
                        performance_metrics += f"- 最小响应时间: {total_stats['minResTime']}ms\n"
                        performance_metrics += f"- 最大响应时间: {total_stats['maxResTime']}ms\n"
                        performance_metrics += f"- 90%响应时间: {total_stats['pct1ResTime']:.2f}ms\n"
                        performance_metrics += f"- 95%响应时间: {total_stats['pct2ResTime']:.2f}ms\n"
                        performance_metrics += f"- 99%响应时间: {total_stats['pct3ResTime']:.2f}ms\n"
                        performance_metrics += f"- 吞吐量: {total_stats['throughput']:.2f}样本/秒\n"
                        performance_metrics += f"- 接收速率: {total_stats['receivedKBytesPerSec']:.2f}KB/秒\n"
                        performance_metrics += f"- 发送速率: {total_stats['sentKBytesPerSec']:.2f}KB/秒\n"

                    # 如果有HTTP请求的单独指标，也提取出来
                    if 'HTTP请求' in stats_data and stats_data['HTTP请求'] != stats_data.get('Total', {}):
                        http_stats = stats_data['HTTP请求']
                        performance_metrics += "\nHTTP请求指标：\n"
                        performance_metrics += f"- 样本数: {http_stats['sampleCount']}\n"
                        performance_metrics += f"- 错误率: {http_stats['errorPct']:.2f}%\n"
                        performance_metrics += f"- 平均响应时间: {http_stats['meanResTime']:.2f}ms\n"
                        performance_metrics += f"- 吞吐量: {http_stats['throughput']:.2f}样本/秒\n"
            except Exception as e:
                print(f"读取性能指标时出错: {str(e)}")
                performance_metrics = "\n(注：无法读取性能指标详情)\n"
        else:
            print(f"错误：未找到statistics.json文件")
            # 尝试查找其他可能的路径位置
            possible_locations = [
                os.path.normpath(os.path.join(base_path, report_dir_name, 'statistics.json')),
                os.path.normpath(os.path.join(os.getcwd(), report_dir_name, 'statistics.json')),
                os.path.normpath(
                    os.path.join(r'D:\dify_workflow\jmeter_workspace', report_dir_name, 'statistics.json')),
                os.path.normpath(os.path.join(r'D:\dify_workflow', 'jmeter_workspace', report_dir_name,
                                              'statistics.json'))
            ]

            for loc in possible_locations:
                print(f"尝试其他位置: {loc}, 存在: {os.path.exists(loc)}")
                if os.path.exists(loc):
                    stats_json_path = loc
                    print(f"找到文件在备选位置: {loc}")
                    # 尝试读取这个找到的文件
                    try:
                        with open(stats_json_path, 'r', encoding='utf-8') as f:
                            stats_data = json.load(f)
                        print(f"成功从备选位置读取数据")
                        # 提取指标，添加并发数和压测时长
                        performance_metrics = "\n(从备选位置找到并读取性能指标)\n"
                        if 'Total' in stats_data:
                            total_stats = stats_data['Total']
                            performance_metrics = "\n性能测试关键指标：\n"
                            performance_metrics += f"- 并发数: {concurrency}\n"
                            # 改进：确保压测时长显示合理
                            if duration and duration != "未知":
                                performance_metrics += f"- 压测时长: {duration}秒\n"
                            else:
                                performance_metrics += "- 压测时长: 未知\n"
                            performance_metrics += f"- 总样本数: {total_stats['sampleCount']}\n"
                            performance_metrics += f"- 错误数: {total_stats['errorCount']}\n"
                            performance_metrics += f"- 错误率: {total_stats['errorPct']:.2f}%\n"
                            performance_metrics += f"- 平均响应时间: {total_stats['meanResTime']:.2f}ms\n"
                            performance_metrics += f"- 吞吐量: {total_stats['throughput']:.2f}样本/秒\n"
                        break
                    except Exception as e:
                        print(f"从备选位置读取失败: {str(e)}")

            if performance_metrics == "":
                # 即使找不到性能指标文件，也要显示并发数和压测时长
                performance_metrics = "\n性能测试关键指标：\n"
                performance_metrics += f"- 并发数: {concurrency}\n"
                # 改进：确保压测时长显示合理
                if duration and duration != "未知":
                    performance_metrics += f"- 压测时长: {duration}秒\n"
                else:
                    performance_metrics += "- 压测时长: 未知\n"
                performance_metrics += "(注：未找到性能指标文件)\n"

        # 构造飞书机器人消息内容
        message = {
            "msg_type": "post",
            "content": {
                "post": {
                    "zh_cn": {
                        "title": f"{report_name}性能测试报告",
                        "content": [
                            [
                                {
                                    "tag": "text",
                                    "text": "性能测试已完成，以下是关键指标："
                                }
                            ],
                            [
                                {
                                    "tag": "text",
                                    "text": performance_metrics
                                }
                            ],
                            [
                                {
                                    "tag": "text",
                                    "text": "\n点击查看详细报告（仅内网可见）："
                                }
                            ],
                            [
                                {
                                    "tag": "a",
                                    "text": f"测试报告链接: {report_dir_name}",
                                    "href": report_url
                                }
                            ]
                        ]
                    }
                }
            }
        }

        # 如果有测试摘要，也添加进去
        if test_summary:
            message["content"]["post"]["zh_cn"]["content"].append([
                {
                    "tag": "text",
                    "text": f"\n测试摘要: {test_summary}"
                }
            ])

        # 发送消息到飞书机器人
        headers = {
            "Host": "open.feishu.cn"
        }
        response = requests.post(webhook_url, json=message, headers=headers, verify=False)

        if response.status_code == 200:
            return jsonify({
                "success": True,
                "message": "报告链接和性能指标已成功发送到飞书群聊",
                "report_url": report_url
            }), 200
        else:
            return jsonify({
                "success": False,
                "error": f"发送失败，状态码: {response.status_code}",
                "response": response.text
            }), 500

    except Exception as e:
        print(f"发送到飞书时发生未预期错误: {str(e)}")
        return jsonify({"error": f"发送到飞书时发生错误: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3900)  # 修改端口为3900以匹配需求