# 框架配置

::: tip
注: 如果主题设置项注册为 `TTDF_RESTAPI_Switch` 则替代 `RestApi` 的配置项
:::

框架配置文件在`TTDF/TTDF.Config.php`

配置项定义值为`false`关闭，`true`开启

```php
// 定义 TTDF 配置
global $defineTTDFConfig;
$defineTTDFConfig = [
    'Fields' => false, // 是否启用自定义字段
    'TyAjax' => false, // 是否启用TyAjax模块
    'CompressHtml' => true, // 是否启用HTML压缩
    'GravatarPrefix' => 'https://cravatar.cn/avatar/', // Gravatar头像源
    'RestApi' => false, // 是否启用RestApi
    'RestApiRoute' => 'ty-json', // RestApi路由
];
```