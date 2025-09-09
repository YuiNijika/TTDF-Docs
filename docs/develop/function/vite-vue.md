# 集成Vite&Vue3

::: warning
Vite作为单独的模块引入, 在这之前你需要会 npm & Vue3 的基础语法
:::

## 引入

首先把Vite模块clone到你的主题目录下覆盖

``` Bash
git clone https://github.com/YuiNijika/TTDF-Vite.git
```

### 安装依赖

``` Bash
npm install
```

## 使用说明

Vite只会构建`src/components`目录下的组件  
构建出的文件不包含Vue语法, 如果不需要Vue处理该组建则删除 `data-component=""` 即可

## 运行

### 启动Vite

``` Bash
npm run dev
```

### 加载Vite配置

修改 `app/TTDF.Config` 的 `VITE` 字段为 `true` 则启动成功

## 构建

``` Bash
npm run build
```
