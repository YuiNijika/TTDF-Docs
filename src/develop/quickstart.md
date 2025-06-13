# 快速开始

::: tip
本文档适配 Typecho 版本为：**1.2+**  
框架&文档全部由作者一人编写，可能会不准确。请勿用于商业用途！  
当前文档完成度：**30%**
:::

## 你需要会

1. Typecho 的基本使用
2. HTML&PHP 的基本语法

### 搭建环境

首先你需要搭建一个Typecho环境，这里不再赘述了，请自行搜索。

如果有`git`环境就打开终端执行
```bash
git clone https://github.com/ShuShuicu/TTDF.git
```

如果没有就到 [GitHub Releases](https://github.com/ShuShuicu/TTDF/releases) 进行下载

将下载/拉取的代码放到`Typecho/usr/themes/`目录的主题文件夹下

到Typecho后台启用主题访问首页你就会看到v2.3.2全新的WelCome

## 修改主题信息

主题相关信息在`index.php`的顶部注释中定义

 - 介绍
 - 包名
 - 作者
 - 版本
 - 链接

```php
<?php
/**
 * 欢迎使用Typecho主题模板开发框架！
 * @package TTDF
 * @author 鼠子(Tomoriゞ)
 * @version 1.0.0
 * @link https://github.com/ShuShuicu/TTDF
 */
```