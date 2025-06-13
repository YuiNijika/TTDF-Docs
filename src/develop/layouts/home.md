# 首页布局

主页布局即是`index.php`文件

在引入`AppHeader`之后和引入`AppFooter`之前写页面的布局即可。

以下是 `DefaultPro` 主题的首页布局代码

```php
<?php

/**
 * Typecho默认主题增强版
 *
 * @package Default Pro
 * @author 鼠子(Tomoriゞ)
 * @version 1.0.0
 * @link https://github.com/ShuShuicu/DefaultPro
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;
get_template('AppHeader');
?>

<div class="col-mb-12 col-8" id="main" role="main">
    <?php while (get_post_list()) { ?>
        <article class="post" itemscope itemtype="http://schema.org/BlogPosting">
        <div class="post-card">
            <h2 class="post-title" itemprop="name headline">
                <a itemprop="url"
                    href="<?php get_post_permalink() ?>"><?php get_post_title() ?></a>
            </h2>
            <ul class="post-meta">
                <li itemprop="author" itemscope itemtype="http://schema.org/Person"><?php _e('作者: '); ?><a
                        itemprop="name" href="<?php $this->author->permalink(); ?>"
                        rel="author"><?php $this->author(); ?></a></li>
                <li><?php _e('时间: '); ?>
                    <time datetime="<?php get_post_date() ?>" itemprop="datePublished"><?php $this->date(); ?></time>
                </li>
                <li><?php _e('分类: '); ?><?php get_post_category() ?></li>
                <li itemprop="interactionCount">
                    <a itemprop="discussionUrl"
                        href="<?php get_post_permalink() ?>#comments"><?php $this->commentsNum('暂无评论', '1 条评论', '%d 条评论'); ?></a>
                </li>
            </ul>
            <div class="post-content post-excerpt" itemprop="articleBody">
                <?php get_post_excerpt(200); ?>
            </div>
        </div>
    </article>
    <?php } ?>
</div>

<?php
get_template('AppSidebar');
get_template('AppFooter');
?>
```