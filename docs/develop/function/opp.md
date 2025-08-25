# OPP 面向过程

本文档详细说明了 TTDF 主题框架中所有可用的面向过程函数（OPP - Object-Oriented to Procedural）及其用法。

## 目录

- [基础函数](#基础函数)
- [站点信息函数](#站点信息函数)
- [文章相关函数](#文章相关函数)
- [用户相关函数](#用户相关函数)
- [评论相关函数](#评论相关函数)
- [主题相关函数](#主题相关函数)
- [通用工具函数](#通用工具函数)
- [分页相关函数](#分页相关函数)

---

## 基础函数

### get_header()
输出或返回头部元数据和link标签

```php
// 直接输出头部信息
get_header();

// 返回头部信息字符串
$header = get_header(false);

// 排除特定的meta标签
get_header(true, 'keywords,description');
```

**参数：**
- `$echo` (bool|null): 是否直接输出，默认 true
- `$exclude` (string|null): 要排除的meta或link标签，多个用逗号分隔

**返回值：** string

### get_footer()
输出或返回页脚内容

```php
// 直接输出页脚
get_footer();

// 返回页脚内容
$footer = get_footer(false);
```

**参数：**
- `$echo` (bool): 是否直接输出，默认 true

**返回值：** string|null

### get_next()
获取下一项内容，用于循环输出

```php
while (get_next()) {
    // 处理每一项内容
    get_post_title();
}
```

**返回值：** mixed

---

## 站点信息函数

### get_site_url()
获取站点URL

```php
// 输出站点URL
get_site_url();

// 获取站点URL字符串
$url = get_site_url(false);
```

### get_site_domain()
获取站点域名

```php
get_site_domain();
$domain = get_site_domain(false);
```

### get_site_name()
获取站点名称

```php
get_site_name();
$name = get_site_name(false);
```

### get_site_keywords()
获取站点关键词

```php
get_site_keywords();
$keywords = get_site_keywords(false);
```

### get_site_description()
获取站点描述

```php
get_site_description();
$description = get_site_description(false);
```

### get_site_language()
获取站点语言

```php
get_site_language();
$lang = get_site_language(false);
```

### get_site_charset()
获取站点字符集

```php
get_site_charset();
$charset = get_site_charset(false);
```

### get_site_page_url()
获取当前页面URL

```php
get_site_page_url();
$pageUrl = get_site_page_url(false);
```

### get_site_theme_name()
获取当前主题名称

```php
get_site_theme_name();
$theme = get_site_theme_name(false);
```

---

## 文章相关函数

### 基础文章信息

#### get_post()
获取当前文章对象

```php
$post = get_post();
```

#### get_post_id()
获取文章ID

```php
get_post_id();
$id = get_post_id(false);
```

#### get_post_title()
获取文章标题

```php
get_post_title();
$title = get_post_title(false);
```

#### get_post_content()
获取文章内容

```php
get_post_content();
$content = get_post_content(false);
```

#### get_post_excerpt()
获取文章摘要

```php
get_post_excerpt();
$excerpt = get_post_excerpt(false);
```

#### get_post_date()
获取文章发布日期

```php
// 默认格式
get_post_date();

// 自定义格式
get_post_date('Y-m-d H:i:s');

// 返回字符串
$date = get_post_date('Y-m-d', false);
```

#### get_post_permalink()
获取文章永久链接

```php
get_post_permalink();
$link = get_post_permalink(false);
```

### 文章作者信息

#### get_post_author()
获取文章作者名称

```php
get_post_author();
$author = get_post_author(false);
```

#### get_post_author_avatar()
获取作者头像

```php
// 默认尺寸 128px
get_post_author_avatar();

// 自定义尺寸
get_post_author_avatar(64);

// 返回头像URL
$avatar = get_post_author_avatar(128, false);
```

#### get_post_author_link()
获取作者链接

```php
get_post_author_link();
$authorLink = get_post_author_link(false);
```

### 文章分类和标签

#### get_post_category()
获取文章分类

```php
// 输出分类链接
get_post_category();

// 返回分类信息
$category = get_post_category(false);
```

#### get_post_tags()
获取文章标签

```php
// 输出标签链接
get_post_tags();

// 返回标签信息
$tags = get_post_tags(false);
```

### 文章统计

#### get_post_word_count()
获取文章字数统计

```php
get_post_word_count();
$wordCount = get_post_word_count(false);
```

#### get_post_total()
获取文章总数

```php
get_post_total();
$total = get_post_total(false);
```

### 文章列表

#### get_random_posts()
获取随机文章

```php
// 获取3篇随机文章
$posts = get_random_posts(3, false);

// 直接输出随机文章列表
get_random_posts(5);
```

#### render_random_posts()
渲染随机文章列表

```php
// 渲染3篇随机文章
render_random_posts(3);

// 返回渲染结果
$rendered = render_random_posts(5, false);
```

#### get_post_list()
获取文章列表

```php
$postList = get_post_list(false);
get_post_list(); // 直接输出
```

### 数据库相关

#### get_post_db_title()
从数据库获取文章标题

```php
get_post_db_title();
$dbTitle = get_post_db_title(false);
```

#### get_post_db_content()
从数据库获取文章内容

```php
get_post_db_content();
$dbContent = get_post_db_content(false);
```

#### get_post_db_content_html()
从数据库获取文章内容并转换为HTML

```php
get_post_db_content_html();
$htmlContent = get_post_db_content_html(false);
```

### 文章实例绑定

#### bind_post_archive()
绑定文章实例

```php
bind_post_archive($archive);
```

#### unbind_post_archive()
解除文章实例绑定

```php
unbind_post_archive();
```

---

## 用户相关函数

### get_user_name()
获取用户名

```php
get_user_name();
$username = get_user_name(false);
```

### get_user_display_name()
获取用户显示名称

```php
get_user_display_name();
$displayName = get_user_display_name(false);
```

### get_user_uid()
获取用户UID

```php
get_user_uid();
$uid = get_user_uid(false);
```

### get_user_login()
获取用户登录状态

```php
get_user_login();
$login = get_user_login(false);
```

### get_user_avatar()
获取用户头像

```php
// 默认尺寸
get_user_avatar();

// 自定义尺寸
get_user_avatar(64);

// 返回头像URL
$avatar = get_user_avatar(128, false);
```

### get_user_email()
获取用户邮箱

```php
get_user_email();
$email = get_user_email(false);
```

### get_user_website()
获取用户网站

```php
get_user_website();
$website = get_user_website(false);
```

### get_user_role()
获取用户角色

```php
get_user_role();
$role = get_user_role(false);
```

### get_user_registered()
获取用户注册时间

```php
// 默认格式
get_user_registered();

// 自定义格式
get_user_registered('Y-m-d');

// 返回时间字符串
$registered = get_user_registered('Y-m-d H:i:s', false);
```

### get_user_last_login()
获取用户最后登录时间

```php
get_user_last_login();
$lastLogin = get_user_last_login('Y-m-d H:i:s', false);
```

### get_user_post_count()
获取用户文章数量

```php
get_user_post_count();
$postCount = get_user_post_count(false);
```

### get_user_page_count()
获取用户页面数量

```php
get_user_page_count();
$pageCount = get_user_page_count(false);
```

### get_user_permalink()
获取用户链接

```php
get_user_permalink();
$userLink = get_user_permalink(false);
```

---

## 评论相关函数

### get_comments()
获取评论内容

```php
get_comments();
$comments = get_comments(false);
```

### get_comments_page()
获取评论页面

```php
get_comments_page();
$commentsPage = get_comments_page(false);
```

### get_comments_list()
获取评论列表

```php
get_comments_list();
$commentsList = get_comments_list(false);
```

### get_comments_num()
获取评论数量

```php
get_comments_num();
$commentsNum = get_comments_num(false);
```

### get_respond_id()
获取回复ID

```php
get_respond_id();
$respondId = get_respond_id(false);
```

### get_cancel_reply()
获取取消回复链接

```php
get_cancel_reply();
$cancelReply = get_cancel_reply(false);
```

### get_remember()
获取记住字段

```php
get_remember();
$remember = get_remember(false);
```

### get_comments_form()
获取评论表单

```php
get_comments_form();
$commentsForm = get_comments_form(false);
```

### get_comments_page_nav()
获取评论分页导航

```php
// 默认文本
get_comments_page_nav();

// 自定义文本
get_comments_page_nav('« 上一页', '下一页 »');

// 返回导航HTML
$nav = get_comments_page_nav('« 上一页', '下一页 »', false);
```

---

## 主题相关函数

### get_theme_file_url()
获取主题文件URL

```php
// 获取CSS文件URL
get_theme_file_url('style.css');

// 获取JS文件URL
$jsUrl = get_theme_file_url('script.js', false);
```

### get_theme_file_path()
获取主题文件绝对路径

```php
// 获取模板文件路径
$templatePath = get_theme_file_path('index.php', false);

// 直接输出路径
get_theme_file_path('functions.php');
```

---

## 通用工具函数

### get_fields()
获取自定义字段

```php
// 获取特定字段
$fieldValue = get_fields('custom_field');
```

### get_template()
引入模板文件

```php
get_template('header');
get_template('sidebar');
```

### get_components()
引入组件文件

```php
get_components('navbar');
get_components('footer');
```

### get_layouts()
引入布局文件

```php
get_layouts('main');
get_layouts('sidebar');
```

### get_file()
引入文件

```php
get_file('custom');
```

### get_need()
引入文件（原始方法）

```php
get_need('header.php');
```

### is_page()
判断页面类型

```php
if (is_page('index')) {
    // 首页逻辑
}

if (is_page('post')) {
    // 文章页逻辑
}
```

### is_http_code()
判断HTTP状态码

```php
if (is_http_code(404)) {
    // 404页面逻辑
}
```

### get_options()
获取配置参数

```php
// 获取配置值
$timezone = get_options('timezone');

// 直接输出配置值
get_options('siteUrl', true);
```

### get_framework_version()
获取框架版本

```php
get_framework_version();
$version = get_framework_version(false);
```

### get_typecho_version()
获取Typecho版本

```php
get_typecho_version();
$version = get_typecho_version(false);
```

---

## 分页相关函数

### get_page_nav()
获取分页导航

```php
// 默认分页导航
get_page_nav();

// 自定义分页文本
get_page_nav('« 上一页', '下一页 »');
```

### get_total()
获取总数

```php
$total = get_total();
```

### get_page_size()
获取页面大小

```php
$pageSize = get_page_size();
```

### get_page_link()
获取页面链接

```php
get_page_link();
get_page_link('', 'next'); // 下一页链接
```

### get_current_page()
获取当前页码

```php
$currentPage = get_current_page();
```

### get_permalink()
获取页面永久链接

```php
$permalink = get_permalink();
```

### get_page_url()
获取当前页面URL

```php
// 基本用法
get_page_url();

// 移除端口号
$url = get_page_url(false, true);

// 排除特定参数
$url = get_page_url(false, false, ['page', 'sort']);

// 移除所有查询参数
$url = get_page_url(false, false, null, true);
```

---

## 使用示例

### 完整的文章循环示例

```php
<?php while (get_next()): ?>
    <article>
        <h2><a href="<?php get_post_permalink(); ?>"><?php get_post_title(); ?></a></h2>
        <div class="meta">
            <span>作者：<?php get_post_author(); ?></span>
            <span>发布时间：<?php get_post_date('Y-m-d'); ?></span>
            <span>分类：<?php get_post_category(); ?></span>
        </div>
        <div class="content">
            <?php get_post_excerpt(); ?>
        </div>
        <div class="tags">
            <?php get_post_tags(); ?>
        </div>
    </article>
<?php endwhile; ?>
```

### 用户信息展示示例

```php
<div class="user-profile">
    <img src="<?php get_user_avatar(128, false); ?>" alt="用户头像">
    <h3><?php get_user_display_name(); ?></h3>
    <p>用户名：<?php get_user_name(); ?></p>
    <p>邮箱：<?php get_user_email(); ?></p>
    <p>网站：<a href="<?php get_user_website(false); ?>"><?php get_user_website(); ?></a></p>
    <p>注册时间：<?php get_user_registered('Y-m-d'); ?></p>
    <p>文章数量：<?php get_user_post_count(); ?></p>
</div>
```

### 评论列表示例

```php
<div class="comments-section">
    <h3>评论 (<?php get_comments_num(); ?>)</h3>
    <?php get_comments_list(); ?>
    <?php get_comments_page_nav(); ?>
    <?php get_comments_form(); ?>
</div>
```

---

## 注意事项

1. **参数说明**：大部分函数都支持 `$echo` 参数，当设置为 `true` 时直接输出，设置为 `false` 时返回值。

2. **错误处理**：所有函数都包含错误处理机制，在出现异常时会返回默认值或空值。

3. **类型声明**：函数参数和返回值都有明确的类型声明，使用时请注意类型匹配。

4. **兼容性**：所有函数都使用 `function_exists()` 检查，避免重复定义。

5. **性能考虑**：建议在循环中使用返回值模式（`$echo = false`），避免不必要的输出缓冲。

---