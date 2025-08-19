# 框架配置

::: tip
注: 如果主题设置项注册为 `TTDF_RESTAPI_Switch` 则替代 `RestApi` 的配置项
:::

框架配置文件在`app/TTDF.Config.php`

配置项定义值为`false`关闭，`true`开启

```php
return [
    'DEBUG' => false, // TTDF Debug
    'FIELDS_ENABLED' => false, // 是否启用自定义字段
    'TYAJAX_ENABLED' => false, // 是否启用TyAjax模块
    'COMPRESS_HTML' => true, // 是否启用HTML压缩
    'GRAVATAR_PREFIX' => 'https://cravatar.cn/avatar/', // Gravatar前缀
    'REST_API' => [
        'ENABLED' => false, // 是否启用REST API
        'ROUTE' => 'ty-json', // REST API路由
        'OVERRIDE_SETTING' => 'TTDF_RESTAPI_Switch', // 主题设置项名称，用于覆盖REST API开关
        'TOKEN' => [
            'ENABLED' => false, // 是否启用Token
            'VALUE' => '1778273540', // Token值
            'FORMAT' => 'Bearer' // 传输格式，可选 'Bearer', 'Token', 'Basic' 或 null
        ],
        'HEADERS' => [
            'Cache-Control' => 'no-cache, no-store, must-revalidate', // 缓存控制
            'Access-Control-Allow-Origin' => '*', // 跨域设置
            'Content-Security-Policy' => "default-src 'self'", // 内容安全策略
            'Access-Control-Allow-Methods' => 'GET,POST', // 请求方法
        ],
    ]
];
```