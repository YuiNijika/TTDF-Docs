# 组件模板

在`Template`目录中你可以创建一个组件或模板用于其他页面的引入使用

默认的两个组件模板为`AppHeader.php`和`AppFooter.php`用于网站全局顶部和底部

## 引用组件模板

框架提供了两种引入方法

```php
get_template('$name'); // 面向过程
Get::Template('$name'); // 面向对象
``` 