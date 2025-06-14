# 自定义SEO

## 使用方法

只需要在引入`AppHeader`之前定义一个`useSeo`类即可实现自定义SEO信息。

## 示例代码

```php
<?php
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
get_template('AppHeader');
```

## 高级使用

可以使用自定义字段或主题设置项来自定义页面的`SEO`信息