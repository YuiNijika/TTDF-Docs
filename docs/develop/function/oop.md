# OOP 面向对象

本文档详细说明了 TTDF 主题框架中所有可用的面向对象类及其方法的用法。

## 目录

- [基础类](#基础类)
- [站点信息类](#站点信息类)
- [文章相关类](#文章相关类)
- [用户相关类](#用户相关类)
- [评论相关类](#评论相关类)
- [主题相关类](#主题相关类)
- [通用工具类](#通用工具类)
- [分页相关类](#分页相关类)

---

## 基础类

### Get::Header()
输出或返回头部元数据和link标签

```php
// 直接输出头部信息
Get::Header();

// 返回头部信息字符串
$header = Get::Header(false);

// 排除特定的meta标签
Get::Header(true, 'keywords,description');
```

**参数：**
- `$echo` (bool|null): 是否直接输出，默认 true
- `$exclude` (string|null): 要排除的meta或link标签，多个用逗号分隔

**返回值：** string

### Get::Footer()
输出或返回页脚内容

```php
// 直接输出页脚
Get::Footer();

// 返回页脚内容
$footer = Get::Footer(false);
```

**参数：**
- `$echo` (bool): 是否直接输出，默认 true

**返回值：** string|null

### Get::Next()
获取下一项内容，用于循环输出

```php
while (Get::Next()) {
    // 处理每一项内容
    GetPost::Title();
}
```

**返回值：** mixed

---

## 站点信息类

### GetSite::Url()
获取站点URL

```php
// 输出站点URL
GetSite::Url();

// 获取站点URL字符串
$url = GetSite::Url(false);
```

### GetSite::Domain()
获取站点域名

```php
GetSite::Domain();
$domain = GetSite::Domain(false);
```

### GetSite::Name()
获取站点名称

```php
GetSite::Name();
$name = GetSite::Name(false);
```

### GetSite::Keywords()
获取站点关键词

```php
GetSite::Keywords();
$keywords = GetSite::Keywords(false);
```

### GetSite::Description()
获取站点描述

```php
GetSite::Description();
$description = GetSite::Description(false);
```

### GetSite::Language()
获取站点语言

```php
GetSite::Language();
$lang = GetSite::Language(false);
```

### GetSite::Charset()
获取站点字符集

```php
GetSite::Charset();
$charset = GetSite::Charset(false);
```

### GetSite::PageUrl()
获取当前页面URL

```php
GetSite::PageUrl();
$pageUrl = GetSite::PageUrl(false);
```

### GetSite::Theme()
获取当前主题名称

```php
GetSite::Theme();
$theme = GetSite::Theme(false);
```

---

## 文章相关类

### 基础文章信息

#### GetPost::getCurrentArchive()
获取当前文章对象

```php
$post = GetPost::getCurrentArchive();
```

#### GetPost::Cid()
获取文章ID

```php
GetPost::Cid();
$id = GetPost::Cid(false);
```

#### GetPost::Title()
获取文章标题

```php
GetPost::Title();
$title = GetPost::Title(false);
```

#### GetPost::Content()
获取文章内容

```php
GetPost::Content();
$content = GetPost::Content(false);
```

#### GetPost::Excerpt()
获取文章摘要

```php
GetPost::Excerpt();
$excerpt = GetPost::Excerpt(false);
```

#### GetPost::Date()
获取文章发布日期

```php
// 默认格式
GetPost::Date();

// 自定义格式
GetPost::Date('Y-m-d H:i:s');

// 返回字符串
$date = GetPost::Date('Y-m-d', false);
```

#### GetPost::Permalink()
获取文章永久链接

```php
GetPost::Permalink();
$link = GetPost::Permalink(false);
```

### 文章作者信息

#### GetPost::Author()
获取文章作者名称

```php
GetPost::Author();
$author = GetPost::Author(false);
```

#### GetPost::AuthorAvatar()
获取作者头像

```php
// 默认尺寸 128px
GetPost::AuthorAvatar();

// 自定义尺寸
GetPost::AuthorAvatar(64);

// 返回头像URL
$avatar = GetPost::AuthorAvatar(128, false);
```

#### GetPost::AuthorPermalink()
获取作者链接

```php
GetPost::AuthorPermalink();
$authorLink = GetPost::AuthorPermalink(false);
```

### 文章分类和标签

#### GetPost::Category()
获取文章分类

```php
// 输出分类链接
GetPost::Category();

// 返回分类信息
$category = GetPost::Category(false);
```

#### GetPost::Tags()
获取文章标签

```php
// 输出标签链接
GetPost::Tags();

// 返回标签信息
$tags = GetPost::Tags(false);
```

### 文章统计

#### GetPost::WordCount()
获取文章字数统计

```php
GetPost::WordCount();
$wordCount = GetPost::WordCount(false);
```

#### GetPost::PostsNum()
获取文章总数

```php
GetPost::PostsNum();
$total = GetPost::PostsNum(false);
```

### 文章列表

#### GetPost::RandomPosts()
获取随机文章

```php
// 获取3篇随机文章
$posts = GetPost::RandomPosts(3, false);

// 直接输出随机文章列表
GetPost::RandomPosts(5);
```

#### GetPost::RenderRandomPosts()
渲染随机文章列表

```php
// 渲染3篇随机文章
GetPost::RenderRandomPosts(3);

// 返回渲染结果
$rendered = GetPost::RenderRandomPosts(5, false);
```

#### GetPost::List()
获取文章列表

```php
$postList = GetPost::List(false);
GetPost::List(); // 直接输出
```

### 数据库相关

#### GetPost::DB_Title()
从数据库获取文章标题

```php
GetPost::DB_Title();
$dbTitle = GetPost::DB_Title(false);
```

#### GetPost::DB_Content()
从数据库获取文章内容

```php
GetPost::DB_Content();
$dbContent = GetPost::DB_Content(false);
```

#### GetPost::DB_Content_Html()
从数据库获取文章内容并转换为HTML

```php
GetPost::DB_Content_Html();
$htmlContent = GetPost::DB_Content_Html(false);
```

### 文章实例绑定

#### GetPost::bindArchive()
绑定文章实例

```php
GetPost::bindArchive($archive);
```

#### GetPost::unbindArchive()
解除文章实例绑定

```php
GetPost::unbindArchive();
```

---

## 用户相关类

### GetUser::Name()
获取用户名

```php
GetUser::Name();
$username = GetUser::Name(false);
```

### GetUser::DisplayName()
获取用户显示名称

```php
GetUser::DisplayName();
$displayName = GetUser::DisplayName(false);
```

### GetUser::Uid()
获取用户UID

```php
GetUser::Uid();
$uid = GetUser::Uid(false);
```

### GetUser::Login()
获取用户登录状态

```php
GetUser::Login();
$login = GetUser::Login(false);
```

```php
GetUser::Login();
$login = GetUser::Login(false);
```


### GetUser::Avatar()
获取用户头像

```php
// 默认尺寸
GetUser::Avatar();

// 自定义尺寸
GetUser::Avatar(64);

// 返回头像URL
$avatar = GetUser::Avatar(128, false);
```

### GetUser::AvatarURL()
获取用户头像URL

```php
GetUser::AvatarURL();
$avatarUrl = GetUser::AvatarURL(false);
```

### GetUser::Email()
获取用户邮箱

```php
GetUser::Email();
$email = GetUser::Email(false);
```

### GetUser::WebSite()
获取用户网站

```php
GetUser::WebSite();
$website = GetUser::WebSite(false);
```

### GetUser::Bio()
获取用户简介

```php
GetUser::Bio();
$bio = GetUser::Bio(false);
```

### GetUser::Role()
获取用户角色

```php
GetUser::Role();
$role = GetUser::Role(false);
```

### GetUser::Registered()
获取用户注册时间

```php
// 默认格式
GetUser::Registered();

// 自定义格式
GetUser::Registered('Y-m-d');

// 返回字符串
$registered = GetUser::Registered('Y-m-d H:i:s', false);
```

### GetUser::LastLogin()
获取最后登录时间

```php
GetUser::LastLogin();
$lastLogin = GetUser::LastLogin(false);
```

### GetUser::PostCount()
获取用户文章数

```php
GetUser::PostCount();
$postCount = GetUser::PostCount(false);
```

### GetUser::PageCount()
获取用户页面数

```php
GetUser::PageCount();
$pageCount = GetUser::PageCount(false);
```

### GetUser::Permalink()
获取用户链接

```php
GetUser::Permalink();
$userLink = GetUser::Permalink(false);
```

---

## 评论相关类

### GetComment::CommentsNum()
获取评论数量

```php
GetComment::CommentsNum();
$num = GetComment::CommentsNum(false);
```

### GetComment::CommentsList()
获取评论列表

```php
GetComment::CommentsList();
$list = GetComment::CommentsList(false);
```

### GetComment::CommentsPageNav()
获取评论分页导航

```php
GetComment::CommentsPageNav();
$nav = GetComment::CommentsPageNav(false);
```

### GetComment::CommentsForm()
获取评论表单

```php
GetComment::CommentsForm();
$form = GetComment::CommentsForm(false);
```

---

## 主题相关类

### GetTheme::Url()
获取主题URL

```php
GetTheme::Url();
$url = GetTheme::Url(false);
```

### GetTheme::Dir()
获取主题目录

```php
GetTheme::Dir();
$dir = GetTheme::Dir(false);
```

### GetTheme::AssetsUrl()
获取资源URL

```php
GetTheme::AssetsUrl();
$assetsUrl = GetTheme::AssetsUrl(false);
```

### GetTheme::Name()
获取主题名称

```php
GetTheme::Name();
$name = GetTheme::Name(false);
```

### GetTheme::Author()
获取主题作者

```php
GetTheme::Author();
$author = GetTheme::Author(false);
```

### GetTheme::Ver()
获取主题版本

```php
GetTheme::Ver();
$version = GetTheme::Ver(false);
```

---

## 通用工具类

### Get::Need()
引入文件（原始方法）

```php
Get::Need('header.php');
```

### Get::Is()
判断页面类型

```php
if (Get::Is('index')) {
    // 首页逻辑
}

if (Get::Is('post')) {
    // 文章页逻辑
}
```

### Get::IsHttpCode()
判断HTTP状态码

```php
if (Get::IsHttpCode(404)) {
    // 404页面逻辑
}
```

### Get::Options()
获取配置参数

```php
// 获取配置值
$timezone = Get::Options('timezone');

// 直接输出配置值
Get::Options('siteUrl', true);
```

### Get::FrameworkVer()
获取框架版本

```php
Get::FrameworkVer();
$version = Get::FrameworkVer(false);
```

### Get::TypechoVer()
获取Typecho版本

```php
Get::TypechoVer();
$version = Get::TypechoVer(false);
```

---

## 分页相关类

### Get::PageNav()
获取分页导航

```php
// 默认分页导航
Get::PageNav();

// 自定义分页文本
Get::PageNav('« 上一页', '下一页 »');
```

### Get::Total()
获取总数

```php
$total = Get::Total();
```

### Get::PageSize()
获取页面大小

```php
$pageSize = Get::PageSize();
```

### Get::PageLink()
获取页面链接

```php
Get::PageLink();
Get::PageLink('', 'next'); // 下一页链接
```

### Get::CurrentPage()
获取当前页码

```php
$currentPage = Get::CurrentPage();
```

### Get::Permalink()
获取页面永久链接

```php
$permalink = Get::Permalink();
```

### Get::PageUrl()
获取当前页面URL

```php
// 基本用法
Get::PageUrl();

// 移除端口号
$url = Get::PageUrl(false, true);

// 排除特定参数
$url = Get::PageUrl(false, false, ['page', 'sort']);

// 移除所有查询参数
$url = Get::PageUrl(false, false, null, true);
```

---

## 使用示例

### 完整的文章循环示例

```php
<?php while (Get::Next()): ?>
    <article>
        <h2><a href="<?php GetPost::Permalink(); ?>"><?php GetPost::Title(); ?></a></h2>
        <div class="meta">
            <span>作者：<?php GetPost::Author(); ?></span>
            <span>发布时间：<?php GetPost::Date('Y-m-d'); ?></span>
            <span>分类：<?php GetPost::Category(); ?></span>
        </div>
        <div class="content">
            <?php GetPost::Excerpt(); ?>
        </div>
        <div class="tags">
            <?php GetPost::Tags(); ?>
        </div>
    </article>
<?php endwhile; ?>
```

### 用户信息展示示例

```php
<div class="user-profile">
    <img src="<?php GetUser::Avatar(128, false); ?>" alt="用户头像">
    <h3><?php GetUser::DisplayName(); ?></h3>
    <p>用户名：<?php GetUser::Name(); ?></p>
    <p>邮箱：<?php GetUser::Email(); ?></p>
    <p>网站：<a href="<?php GetUser::WebSite(false); ?>"><?php GetUser::WebSite(); ?></a></p>
    <p>注册时间：<?php GetUser::Registered('Y-m-d'); ?></p>
    <p>文章数量：<?php GetUser::PostCount(); ?></p>
</div>
```

### 评论列表示例

```php
<div class="comments-section">
    <h3>评论 (<?php GetComment::CommentsNum(); ?>)</h3>
    <?php GetComment::CommentsList(); ?>
    <?php GetComment::CommentsPageNav(); ?>
    <?php GetComment::CommentsForm(); ?>
</div>
```

---

## 注意事项

1. **参数说明**：大部分方法都支持 `$echo` 参数，当设置为 `true` 时直接输出，设置为 `false` 时返回值。

2. **错误处理**：所有类都包含错误处理机制，在出现异常时会返回默认值或空值。

3. **类型声明**：方法参数和返回值都有明确的类型声明，使用时请注意类型匹配。

4. **单例模式**：部分类使用了单例模式，确保实例的唯一性。

5. **性能考虑**：建议在循环中使用返回值模式（`$echo = false`），避免不必要的输出缓冲。

---
