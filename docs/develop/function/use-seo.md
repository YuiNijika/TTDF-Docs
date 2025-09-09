# 自定义SEO

## 使用方法

只需要在引入`AppHeader`之前定义一个`useSeo`类即可实现自定义SEO信息。

## 示例代码

```php
<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;

// 先定义 SEO 信息
const useSeo = [
    'title' => '这是自定义标题',
    'description' => '这是自定义描述',
    'keywords' => '这是自定义关键字'
];

// 确保 Archive 部件已初始化
$archive = Typecho_Widget::widget('Widget_Archive', array('type' => 'error'));

Get::Components('AppHeader');
```

### 使用class定义

```php
class useSeo
{
    public static function Title() {
        echo '自定义标题';
    }
    public static function Description() {
        echo '自定义描述';
    }
    public static function Keywords() {
        echo '自定义关键词';
    }
}
```
