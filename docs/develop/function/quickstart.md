# 框架功能

::: tip
`TTDF`提供了面向对象&面向过程的调用方法及集成TyAjax&RESTAPI的封装。
:::

## 调用说明

调用时值为 `true` 直接 `echo` 输出，如果为 `false` 则 `return` 返回值。

~~由于面向过程也是封装的面向对象，所以更推荐使用面向对象方法~~

### 面向对象

```php
use TTDF\Get;

// 获取配置值
$timezone = Get::Options('timezone');

// 直接输出配置值
Get::Options('siteUrl', true);
```

### 面向过程

```php
// 获取配置值
$timezone = get_options('timezone');

// 直接输出配置值
get_options('siteUrl', true);
```
