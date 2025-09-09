# 静态资源

::: tip
静态资源存放在`assets`目录下
:::

## 调用规范

### `app.css`

在`header`中默认调用的css文件，结构为

```css
@charset "UTF-8";
/* Motyf CSS */
@import "./_ttdf/motyf.css";

/* 欢迎页CSS 正式环境请先移除 */
@import "./_ttdf/welcome.css";
```

如需自定义css可以直接在`app.css`下方添加或是创建自定义`custom.css`文件  
再`@import "./custom.css";`引入

### `ttdf.js`

在`footer`中默认调用的js模块文件，结构为

```JavaScript
/* TyAjax */
import "./_ttdf/ajax.js"

/* Motyf JS */
import "./_ttdf/motyf.js"
```

默认情况下你也可以跟`css`一样创建自定义`custom.js`文件  
再`import "./custom.js";`引入  
不过更推荐创建一个`main.js`再到`AppFooter`组件中引入

```php
<script src="<?php get_theme_file_url('assets/main.js?ver=') . get_theme_version(); ?>"></script>
```