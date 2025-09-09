# 组件

::: tip
TTDF遵循Nuxt开发风格, 使用组件化进行开发主题
:::

## 组件目录

组件目录位于 `app/components` 目录下

每个组件都是一个独立的名称或目录，文件名就是组件的名称

### 组件调用

组件调用时需要使用 `Get::Components` 类名或`get_components` 函数调用

在调用时不区分大小写:

`app/components/appheader.php`

`app/components/App/Footer.php`

```php
Get::Components('AppHeader'); // 面向对象
get_components('app/footer'); // 面向过程
```
