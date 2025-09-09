# 自动路由

::: tip
非常实用的自动路由功能
:::

路由目录在`app/pages/`下, 以文件名的方式作为路径, 支持静动态

## 静态路由示例

```php
<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
// app/oages/demo.php
echo 'test route';
```

访问 `/demo` 就会输出 `test route`

## 动态路由示例

```php
<?php 
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
// app/pages/[id].php
echo 'This is test Router id: ' . $_GET['id'] . "<br><br>" .'这是个测试路由, 定义在 app/pages/[id].php 不需要直接删除即可';
```
