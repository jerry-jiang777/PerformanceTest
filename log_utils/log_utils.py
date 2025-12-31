import logging
import json
import os
from functools import wraps
from datetime import datetime
from flask import request

# 确保log_utils目录存在
log_dir = os.path.dirname(__file__)
api_log_path = os.path.join(log_dir, 'api_calls.log')

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

            # 记录请求信息
            api_logger.info(f"API请求开始: {json.dumps(request_info, ensure_ascii=False, default=str)}")

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

                # 记录响应信息
                api_logger.info(f"API响应完成: {json.dumps(response_info, ensure_ascii=False, default=str)}")

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

                api_logger.error(f"API请求异常: {json.dumps(error_info, ensure_ascii=False, default=str)}")

                # 重新抛出异常
                raise e

        return wrapper

    return decorator