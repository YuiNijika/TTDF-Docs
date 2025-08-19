# Hook钩子系统
> 在TTDF `2.1.2`版本里，新增了TTDF_Hook的钩子类名，注册及挂载也是很简单的

## 注册钩子
``` php
TTDF_Hook::do_action('Register_Hook');
```

## 挂载钩子
``` php
TTDF_Hook::add_action('Register_Hook', function () {
    echo 'Register_Hook已挂载';
});
```

## 默认钩子

AppHeader.php及AppFooter.php存在两个默认的钩子  

分别为`load_head` & `load_foot`

## 兼容性
为了兼容一些插件，挂载Typecho的header及footer也是可以正常加载的

``` php
function Theme_header() {
    echo '<script>console.log("Header Hook");</script>';
}
Typecho_Plugin::factory('Widget_Archive')->header = 'Theme_header';
```