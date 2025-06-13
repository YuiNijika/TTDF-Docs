# Get方法及函数

> 获取网站信息及其他通用功能

## 面向对象
| 方法                          | 描述             | 示例                      |
| ----------------------------- | ---------------- | ------------------------- |
| `SiteUrl()`                   | 获取网站的 URL   | `Get::SiteUrl();`         |
| `PageUrl()`                   | 获取当前url      | `Get::PageUrl();`         |
| `SiteDomain() `               | 获取网站域名     | `Get::SiteDomain();`      |
| `SiteName()`                  | 获取网站名称     | `Get::SiteName();`        |
| `SiteKeywords()`              | 获取网站关键词   | `Get::SiteKeywords();`    |
| `SiteDescription()`           | 获取网站描述     | `Get::SiteDescription();` |
| `Options($param)`             | 获取配置项       | `Get::Options('name');`   |
| `Fields($param)`              | 获取字段         | `Get::Fields('name');`    |
| `Is($type)`                   | 判断当前页面类型 | `Get::Is('type');`        |
| `Next()`                      | 返回数组值       | `Get::Next();`            |
| `PageNav($prev, $next)`       | 获取分页导航     | `Get::PageNav();`         |
| `PageLink($link, $type = '')` | 获取分页链接     | `Get::PageLink();`        |
| `Total()`                     | 获取文章总数     | `Get::Total();`           |
| `PageSize()`                  | 获取每页文章数   | `Get::PageSize();`        |
| `CurrentPage()`               | 获取当前页码     | `Get::CurrentPage();`     |
| `Permalink()`                 | 获取固定链接     | `Get::Permalink();`       |
| `Field($field)`               | 获取自定义字段   | `Get::Field();`           |
| `Template($file)`             | 获取模板组件     | `Get::Template('$file');` |

> Get::PageUrl() 方法可自定义输出，示例如下：  
> 默认用法  
> Get::PageUrl();  
> 移除所有查询参数  
> Get::PageUrl(true, false, null, true);  
> 屏蔽指定参数  
> Get::PageUrl(true, false, ['foo', 'baz']);  
> 移除所有查询参数并移除端口  
> Get::PageUrl(true, true, null, true);  

## 面向过程

| 函数名称                      | 描述            | 示例                          |
| ----------------------------- | --------------- | ----------------------------- |
| `is_page($type)`              | 获取页面类型    | `is_page('$type')`            |
| `get_next()`                  | 返回数值值      | `get_next()`                  |
| `get_site_url()`              | 获取网站URL     | `get_site_url()`              |
| `get_page_url()`              | 获取当前页面URL | `get_page_url()`              |
| `get_site_domain()`           | 获取网站域名    | `get_site_domain()`           |
| `get_site_title()`            | 获取网站标题    | `get_site_title()`            |
| `get_site_name()`             | 获取网站名称    | `get_site_name()`             |
| `get_site_keywords()`         | 获取网站关键词  | `get_site_keywords()`         |
| `get_site_description()`      | 获取网站描述    | `get_site_description()`      |
| `get_site_charset()`          | 获取网站编码    | `get_site_charset()`          |
| `get_permalink()`             | 获取固定链接    | `get_permalink()`             |
| `get_page_link($html, $next)` | 获取分页链接    | `get_page_link($html, $next)` |
| `get_current_page()`          | 获取当前页码    | `get_current_page()`          |
| `get_fields('$name')`         | 获取字段值      | `get_fields('$name')`         |
| `get_options('$name')`        | 获取设置项      | `get_options('$name')`        |
| `get_typecho_version()`       | 获取Typecho版本 | `get_typecho_version`         |
| `get_framework_version()`     | 获取框架版本号  | `get_framework_version()`     |