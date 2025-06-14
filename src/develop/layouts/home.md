# 首页布局

主页布局即是`index.php`文件

在引入`AppHeader`之后和引入`AppFooter`之前写页面的布局即可。

以下是一个简单的首页布局代码示例

```php
<?php
/**
 * 欢迎使用Typecho主题模板开发框架！
 * @package TTDF
 * @author 鼠子(Tomoriゞ)
 * @version 1.0.0
 * @link https://github.com/ShuShuicu/TTDF
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
Get::Template('AppHeader');

// while 输出文章列表
while (GetPost::List()) {
?>
<li>
    <a href="<?php GetPost::Permalink(); ?>">
        <h2><?php GetPost::Title(); ?></h2>
        <p><?php GetPost::Excerpt('200'); ?></p>
    </a>
</li>
<?php
};

Get::Template('AppFooter');
```