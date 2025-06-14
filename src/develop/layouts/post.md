# 文章页面布局

```php
<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
Get::Template('AppHeader');
?>
<h2><?php GetPost::Title(); ?></h2>
<p>
<?php GetPost::Date(); ?> · <?php GetPost::Category(); ?> · <?php GetPost::Tags(); ?>
</p>
<div>
<?php GetPost::Content(); ?>
</div>
<?php
Get::Template('AppFooter');
```