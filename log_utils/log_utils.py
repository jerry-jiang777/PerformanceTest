import logging
import json
import os
from functools import wraps
from datetime import datetime
from flask import request

# 确保log_utils目录存在
log_dir = os.path.dirname(__file__)
api_log_path = os.path.join(log_dir, 'api_calls.log')

# 设置日志文件最大大小为10MB（单位：字节）
MAX_LOG_SIZE = 10 * 1024 * 1024  # 10MB

def rotate_log_file(file_path, max_size):
    """
    检查日志文件大小，如果超过限制则清理旧记录
    """
    if os.path.exists(file_path):
        file_size = os.path.getsize(file_path)
        if file_size > max_size:
            # 读取现有日志内容
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            # 计算需要保留的日志条目数量（保留后半部分）
            # 为了安全起见，只保留大约一半的内容，确保文件大小在限制内
            total_size = sum(len(line.encode('utf-8')) for line in lines)
            target_size = max_size // 2  # 目标大小为限制的一半
            
            # 从后往前计算，直到达到目标大小
            retained_lines = []
            current_size = 0
            for line in reversed(lines):
                line_size = len(line.encode('utf-8'))
                if current_size + line_size <= target_size:
                    retained_lines.append(line)
                    current_size += line_size
                else:
                    break
            
            # 将保留的日志写回文件
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(reversed(retained_lines))

# 配置日志记录器
api_logger = logging.getLogger('api_logger')
api_logger.setLevel(logging.INFO)

# 创建文件处理器，将日志保存在log_utils目录下
file_handler = logging.FileHandler(api_log_path, encoding='utf-8')
file_handler.setLevel(logging.INFO)

# 创建格式化器
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
file_handler.setFormatter(formatter)

# 为logger添加处理器
if not api_logger.handlers:
    api_logger.addHandler(file_handler)


def log_api_call():
    """
    装饰器：用于记录API调用的详细信息
    记录内容包括：请求URL、方法、头信息、请求体、响应体及状态码
    """

    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # 检查并清理日志文件
            rotate_log_file(api_log_path, MAX_LOG_SIZE)
            
            # 记录请求开始时间
            start_time = datetime.now()

            # 记录请求信息
            request_info = {
                'timestamp': start_time.isoformat(),
                'method': request.method,
                'url': request.url,
                'remote_addr': request.remote_addr,
                'headers': dict(request.headers),
                'path': request.path,
                'query_params': dict(request.args),
                'request_body': None
            }

            # 记录请求体（如果是JSON或表单数据）
            if request.is_json:
                request_info['request_body'] = request.get_json()
            elif request.form:
                request_info['request_body'] = dict(request.form)
            elif request.data:
                try:
                    request_info['request_body'] = request.data.decode('utf-8')
                except:
                    request_info['request_body'] = str(request.data)

            # 从路径中提取API名称，用于生成标识前缀
            api_path = request.path.strip('/').replace('/', '_') or 'api'
            if not api_path:
                api_path = 'api'
            
            # 记录请求信息，添加动态标识前缀
            api_logger.info(f"{api_path} API请求开始: {json.dumps(request_info, ensure_ascii=False, default=str)}")

            try:
                # 执行原函数
                response = func(*args, **kwargs)

                # 记录响应信息
                response_info = {
                    'timestamp': datetime.now().isoformat(),
                    'url': request.url,
                    'method': request.method,
                    'status_code': 200 if hasattr(response, 'status_code') and response.status_code else 200,
                    'response_data': None
                }

                # 尝试获取响应数据
                if hasattr(response, 'get_json'):
                    try:
                        response_info['response_data'] = response.get_json()
                    except:
                        response_info['response_data'] = str(response.get_data(as_text=True))
                elif hasattr(response, 'data'):
                    try:
                        response_info['response_data'] = response.get_data(as_text=True)
                    except:
                        response_info['response_data'] = str(response)
                else:
                    response_info['response_data'] = str(response)

                # 记录响应信息，添加动态标识前缀
                api_logger.info(f"{api_path} API响应完成: {json.dumps(response_info, ensure_ascii=False, default=str)}")

                return response

            except Exception as e:
                # 记录异常信息
                error_info = {
                    'timestamp': datetime.now().isoformat(),
                    'url': request.url,
                    'method': request.method,
                    'error': str(e),
                    'error_type': type(e).__name__
                }

                api_logger.error(f"{api_path} API请求异常: {json.dumps(error_info, ensure_ascii=False, default=str)}")

                # 重新抛出异常
                raise e

        return wrapper

    return decorator