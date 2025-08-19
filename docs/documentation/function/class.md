# 类与方法

## Get

获取网站信息及其他通用功能。


::: tip
Get::PageUrl() 方法可自定义输出，示例如下：  
默认用法  
Get::PageUrl();  
移除所有查询参数  
Get::PageUrl(true, false, null, true);  
屏蔽指定参数  
Get::PageUrl(true, false, ['foo', 'baz']);  
移除所有查询参数并移除端口  
Get::PageUrl(true, true, null, true);  
:::

|            方法             |       描述       |          示例           |
| :-------------------------: | :--------------: | :---------------------: |
|          SiteUrl()          |  获取网站的 URL  |     Get::GetSiteUrl();     |
|          PageUrl()          |   获取当前url    |     Get::PageUrl();     |
|        SiteDomain()         |   获取网站域名   |   Get::GetSiteDomain();    |
|         SiteName()          |   获取网站名称   |    Get::SiteName();     |
|       SiteKeywords()        |  获取网站关键词  |  Get::SiteKeywords();   |
|      SiteDescription()      |   获取网站描述   | Get::SiteDescription(); |
|       Options($param)       |    获取配置项    |  Get::Options('name');  |
|       Fields($param)        |     获取字段     |  Get::Fields('name');   |
|          Is($type)          | 判断当前页面类型 |    Get::Is('type');     |
|           Next()            |    返回数组值    |      Get::Next();       |
|    PageNav($prev, $next)    |   获取分页导航   |     Get::PageNav();     |
| PageLink($link, $type = '') |   获取分页链接   |    Get::PageLink();     |
|           Total()           |   获取文章总数   |      Get::Total();      |
|         PageSize()          |  获取每页文章数  |    Get::PageSize();     |
|        CurrentPage()        |   获取当前页码   |   Get::CurrentPage();   |
|         Permalink()         |   获取文章链接   |    Get::Permalink();    |
|        Field($field)        |  获取自定义字段  |      Get::Field();      |
