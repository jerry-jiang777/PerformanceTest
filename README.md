# PerformanceTest

Flask + Dify + JMeter 构建的 AI 性能测试助手项目。

本项目用于把 Dify 工作流和 JMeter 压测能力串联起来，让使用者在 Dify 对话界面中上传 JMeter 脚本、配置压测参数、自动执行多轮压测、由 LLM 辅助判断性能拐点，并生成 JMeter HTML 报告和飞书群通知。

## 核心能力

- 通过 Dify 上传 JMeter `.jmx` 脚本和可选参数化文件。
- 通过 Flask API 调用 JMeter 命令行执行压测。
- 支持单机压测和 JMeter 分布式压测。
- 支持按并发线程数和压测持续时间动态注入 JMeter 参数。
- 读取 `jmeter.log` 中的 summary 概要结果。
- 由 Dify 工作流中的 LLM 节点分析多轮压测数据，判断是否达到性能拐点。
- 未达到拐点时自动给出下一轮并发线程数并继续压测。
- 达到拐点后自动生成 JMeter HTML Dashboard 报告。
- 提取 `statistics.json` 中的关键性能指标并发送到飞书群。
- 提供报告静态资源访问能力，方便通过链接查看压测报告。

## 项目结构

```text
.
├── README.md
├── .gitignore
├── data/
│   └── 性能测试小助手_dev.yml
├── jmeter_scripts/
│   ├── login.jmx
│   └── 性能测试自动化压测工具251111.yml
├── jmeter_workspace/
│   ├── *.jtl
│   ├── jmeter.log
│   └── *_report/
├── log_utils/
│   ├── __init__.py
│   ├── log_utils.py
│   └── api_calls.log
└── src/
    └── uat_jmeter_service.py
```

目录说明：

- `src/uat_jmeter_service.py`：Flask 服务入口，提供上传脚本、执行压测、生成报告、访问报告、发送飞书通知等接口。
- `log_utils/`：API 调用日志工具，使用装饰器记录请求和响应。
- `data/`：Dify 应用 DSL 文件，建议纳入版本管理，便于团队共享和追踪工作流变更。
- `jmeter_scripts/`：示例 JMeter 脚本和 Dify 工作流备份文件。
- `jmeter_workspace/`：JMeter 运行工作目录，用于保存上传文件、结果文件、日志和 HTML 报告。该目录是运行产物，不建议提交到版本库。

## 工作流程

1. 用户在 Dify 页面上传 JMeter `.jmx` 脚本。
2. 用户填写压力机 IP、压测模式、起始并发数、单轮压测持续时间等参数。
3. Dify 调用 Flask 服务的 `/upload` 接口上传脚本和参数化文件。
4. Dify 调用 `/execute_jmeter` 接口启动 JMeter 压测。
5. Flask 在 `jmeter_workspace/` 下生成 `.jtl` 结果文件，并读取 `jmeter.log` 的 summary 概要。
6. Dify 将多轮压测概要传给 LLM 节点，由 LLM 判断是否达到性能拐点。
7. 如果未达到拐点，Dify 根据 LLM 输出继续下一轮并发压测。
8. 如果达到拐点，Dify 调用 `/generate_report` 生成 JMeter HTML 报告。
9. Dify 调用 `/send_to_feishu`，Flask 读取报告中的 `statistics.json` 并发送飞书通知。
10. 用户通过报告链接查看完整 JMeter Dashboard。

## 环境要求

### Python

建议使用 Python 3.10 及以上版本。

当前代码依赖：

```text
Flask
requests
Werkzeug
```

如果项目暂未维护 `requirements.txt`，可以先手动安装：

```bash
pip install Flask requests Werkzeug
```

### JMeter

服务当前通过 `jmeter.bat` 调用 JMeter，因此默认面向 Windows 压力机环境。

需要确保：

- 已安装 Apache JMeter。
- `jmeter.bat` 所在目录已加入系统 `PATH`。
- 命令行执行 `jmeter.bat -v` 能正常输出版本信息。
- 如果使用分布式压测，JMeter server 节点已启动，并完成远程主机配置。

### Dify

需要一个可导入 DSL 的 Dify 环境。

项目中可使用的 DSL 文件：

- `data/性能测试小助手_dev.yml`
- `jmeter_scripts/性能测试自动化压测工具251111.yml`

推荐优先使用 `data/性能测试小助手_dev.yml`，它是当前项目中的开发版性能测试小助手工作流。

## 快速启动

### 1. 准备 JMeter 工作目录

当前 Flask 服务中默认工作目录为：

```text
D:\dify_workflow\jmeter_workspace
```

代码位置：`src/uat_jmeter_service.py`

```python
UPLOAD_FOLDER = r'D:\dify_workflow\jmeter_workspace'
```

如果你的项目放在其他路径，需要按实际压力机路径调整该配置。

### 2. 启动 Flask 服务

在项目根目录执行：

```bash
python src/uat_jmeter_service.py
```

服务启动后监听：

```text
http://0.0.0.0:3900
```

Dify 工作流中填写的压力机 IP 应能访问该端口。

### 3. 导入 Dify 工作流

在 Dify 控制台中导入 DSL：

```text
data/性能测试小助手_dev.yml
```

导入后重点检查以下配置：

- LLM 模型供应商和模型名称是否在当前 Dify 环境可用。
- HTTP 请求节点是否指向 `http://{{压力机IP}}:3900/...`。
- 飞书机器人 Webhook 是否已替换为当前团队自己的地址。
- Dify 环境变量、插件依赖是否已安装或替换。

### 4. 准备 JMeter 脚本

示例脚本：

```text
jmeter_scripts/login.jmx
```

该脚本通过 JMeter 属性接收并发数和持续时间：

```xml
<stringProp name="ThreadGroup.num_threads">${__P(num,)}</stringProp>
<stringProp name="ThreadGroup.duration">${__P(duration,)}</stringProp>
```

Flask 执行压测时会注入：

```text
-Jnum=<并发线程数>
-Jduration=<压测持续时间秒数>
```

如果你上传自己的 `.jmx`，也需要保持相同参数名，或同步修改 Flask 服务中的命令参数。

## Flask API

### 上传文件

```http
POST /upload
Content-Type: multipart/form-data
```

表单字段：

- `files`：一个或多个文件，通常是 `.jmx` 脚本或参数化文件。

成功响应示例：

```json
{
  "message": "文件上传成功",
  "uploaded_files": ["login.jmx"],
  "count": 1
}
```

### 执行 JMeter 压测

```http
POST /execute_jmeter
Content-Type: application/json
```

请求体：

```json
{
  "jmx": "login.jmx",
  "threads": "100",
  "mode": "single",
  "duration": "60"
}
```

字段说明：

- `jmx`：已上传到工作目录的 JMeter 脚本文件名。
- `threads`：本轮压测并发线程数。
- `mode`：压测模式，可选 `single` 或 `distributed`。
- `duration`：本轮压测持续时间，单位秒。

成功响应示例：

```json
{
  "message": "JMeter执行成功",
  "script_name": "login.jmx",
  "concurrency": "100",
  "mode": "single",
  "duration": "60",
  "result_file": "login_100.jtl",
  "summary": "summary = ..."
}
```

### 生成 HTML 报告

```http
POST /generate_report
Content-Type: application/json
```

请求体：

```json
{
  "jmx": "login.jmx",
  "threads": "100"
}
```

服务会查找结果文件：

```text
login_100.jtl
```

并生成报告目录：

```text
login_100.jtl_report
```

成功响应示例：

```json
{
  "success": true,
  "message": "报告生成成功",
  "jtl_file": "login_100.jtl",
  "report_directory": "login_100.jtl_report",
  "report_path": "/login_100.jtl_report"
}
```

### 访问报告

```http
GET /<report_dir_name>
```

示例：

```text
http://<压力机IP>:3900/login_100.jtl_report
```

该接口会读取报告目录中的 `index.html`，并修正静态资源路径。

### 发送飞书通知

```http
POST /send_to_feishu
Content-Type: application/json
```

请求体：

```json
{
  "webhook_url": "https://open.feishu.cn/open-apis/bot/v2/hook/xxx",
  "report_dir_name": "login_100.jtl_report",
  "duration": "60",
  "report_name": "登录接口压测"
}
```

服务会读取：

```text
jmeter_workspace/login_100.jtl_report/statistics.json
```

并提取以下关键指标：

- 并发数
- 压测时长
- 总样本数
- 错误数
- 错误率
- 平均响应时间
- 中位数响应时间
- 最小响应时间
- 最大响应时间
- 90%、95%、99% 响应时间
- 吞吐量
- 接收速率
- 发送速率

## Dify 工作流说明

`data/性能测试小助手_dev.yml` 是一个 Dify advanced-chat 应用 DSL，主要节点包括：

- 开始节点：接收 `.jmx`、压力机 IP、压测模式、单轮压测时长、参数化文件、起始并发数、测试名称。
- 上传脚本节点：调用 `/upload` 上传 JMeter 脚本。
- 参数文件判断节点：如果存在参数化文件，则继续上传。
- 循环节点：最多执行多轮压测，直到 LLM 判断达到性能拐点。
- 执行压测节点：调用 `/execute_jmeter`。
- 历史数据维护节点：把每轮 summary 追加到历史压测数据中。
- LLM 判断节点：根据历史压测概要判断是否达到性能拐点，并输出下一轮线程数。
- 报告生成节点：调用 `/generate_report`。
- 飞书通知节点：调用 `/send_to_feishu`。

LLM 节点期望输出 JSON：

```json
{
  "next_threads": 50,
  "is_best": 0,
  "best_tps": 0,
  "best_rt": 0,
  "best_threads": 0
}
```

字段说明：

- `next_threads`：下一轮并发数；达到拐点时为 `0`。
- `is_best`：是否达到拐点，`0` 表示否，`1` 表示是。
- `best_tps`：拐点 TPS。
- `best_rt`：拐点平均响应时间。
- `best_threads`：拐点线程数。

## JMeter 脚本约定

为了让 Flask 服务能统一控制 JMeter 脚本，建议所有 `.jmx` 遵循以下约定：

- 线程组并发数使用 `${__P(num,)}`。
- 线程组持续时间使用 `${__P(duration,)}`。
- 线程组启用 scheduler。
- 不在 `.jmx` 中固定写死结果文件路径。
- 如果使用 CSV Data Set Config，参数文件名应与 Dify 上传到工作目录后的文件名一致。

## 运行产物

以下文件通常由运行时生成，不建议提交到 Git：

- `jmeter_workspace/*.jtl`
- `jmeter_workspace/jmeter.log`
- `jmeter_workspace/*_report/`
- `log_utils/api_calls.log`
- `__pycache__/`
- 本地录屏文件，如 `*.mp4`、`*.gif`

这些内容已在 `.gitignore` 中配置忽略。

## 安全注意事项

- Dify DSL 中不应长期保存真实飞书机器人 Webhook，建议改为 Dify 环境变量或部署时注入。
- `log_utils/api_calls.log` 会记录请求头、请求体和响应体，可能包含 Webhook、参数、文件名等敏感信息。
- 当前飞书发送逻辑使用 `verify=False` 关闭 HTTPS 证书校验，只建议在受控测试环境中使用。
- Flask 服务以 `debug=True` 启动，不建议直接暴露到公网或生产环境。
- 当前服务没有鉴权，任何能访问 `3900` 端口的客户端都可以上传文件和触发压测。
- `UPLOAD_FOLDER` 和 `SERVER_URL` 当前是硬编码配置，正式部署建议改为环境变量。

## 常见问题

### 1. Dify 调用接口失败

检查：

- Flask 服务是否已启动。
- Dify 所在机器是否能访问压力机 IP 的 `3900` 端口。
- 防火墙是否放行端口。
- Dify HTTP 节点中的 URL 是否正确。

### 2. 提示 `jmeter.bat` 找不到

检查：

- JMeter 是否已安装。
- `JMETER_HOME/bin` 是否已加入系统 `PATH`。
- 在同一终端中执行 `jmeter.bat -v` 是否成功。

### 3. 生成报告失败

检查：

- 对应的 `.jtl` 文件是否存在。
- 报告目录是否已存在且非空。JMeter 对 `-o` 输出目录有要求，必要时清空旧报告目录后重试。
- `jmeter_workspace/` 是否有写入权限。

### 4. 飞书通知没有性能指标

检查：

- 报告目录中是否存在 `statistics.json`。
- `report_dir_name` 是否与实际报告目录一致。
- JMeter HTML Dashboard 是否生成完整。

### 5. LLM 一直无法判断拐点

检查：

- `/execute_jmeter` 返回的 `summary` 是否为空。
- `jmeter.log` 是否包含 `summary =` 行。
- Dify 历史数据变量是否正确追加每轮压测数据。
- LLM 输出是否严格为 JSON。

## 后续优化建议

- 增加 `requirements.txt` 或 `pyproject.toml` 管理 Python 依赖。
- 将 `UPLOAD_FOLDER`、`SERVER_URL`、JMeter 命令、飞书 Webhook 改为环境变量。
- 为 Flask API 增加鉴权，避免未授权触发压测。
- 使用结构化日志并对敏感字段脱敏。
- 将 `debug=True` 改为按环境变量控制。
- 增加接口测试，覆盖上传、执行、报告生成和飞书通知逻辑。
- 抽离 JMeter 命令执行逻辑，方便兼容 Linux 下的 `jmeter` 命令。
