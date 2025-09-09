# REST API

::: tip
提供简单易用的 REST API 接口，用于获取网站数据。
:::

> `ty-json`路由及状态在`app/TTDF.Config.php`中定义。

全局参数

`page` 控制当前页码（默认值：`1`
`pageSize` 控制每页显示条数（默认值：`10`
`format` 控制返回格式，支持格式为`html`&`markdown`
`excerptLength` 控制文章摘要长度（默认值：`200`

| 调用 |                  路由                  | 其他参数&路由 |         描述         |
| :--: | :------------------------------------: | :-----------: | :------------------: |
| Get  |                /ty-json                |     null      |     获取网站信息     |
| Get  |             /ty-json/posts             |     null      |     获取文章列表     |
| Get  |             /ty-json/pages             |     null      |     获取页面列表     |
| Get  |        /ty-json/search/{string}        |    string     |     搜索文章列表     |
| Get  |       /ty-json/category/{string}       |   mid, slug   |     获取分类列表     |
| Get  |         /ty-json/tag/{string}          |   mid, slug   |     获取标签列表     |
| Get  |       /ty-json/content/{string}        |   cid, slug   |     获取内容数据     |
| Get  |          /ty-json/attachments          |     null      |     获取附件列表     |
| Get  |           /ty-json/comments            |     post      |     获取评论列表     |
| POST |           /ty-json/comments            |     null      |       提交评论       |
| Get  |       /ty-json/comments/{string}       |    string     |     获取评论详情     |
| Get  |     /ty-json/comments/cid/{string}     |    string     |   获取文章评论列表   |
| Get  |     /ty-json/fields/{name}/{value}     |    string     |   获取字段文章列表   |
| Get  | /ty-json/advancedFields/{name}/{value} |    string     | 获取高级字段查询列表 |
| Get  |           /ty-json/options/            |     null      |    获取设置项列表    |
| Get  |    /ty-json/options/{name}/{value}     |    string     |    获取设置项详情    |

## 提交评论

```javascript
document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // 禁用提交按钮并显示加载状态
  const submitBtn = document.getElementById("submitBtn");
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "提交中...";

  // 显示加载消息
  showMessage("正在提交评论...", "loading");

  // 获取表单数据
  const formData = new FormData(this);
  const commentData = {};

  // 将FormData转换为普通对象
  for (let [key, value] of formData.entries()) {
    // 处理字段值
    if (value !== null && value !== undefined && value !== "") {
      // 对于数字类型的字段进行转换
      if (["cid", "parent"].includes(key)) {
        commentData[key] = parseInt(value) || 0;
      } else {
        commentData[key] = value;
      }
    }
  }

  console.log("发送的数据:", commentData);

  // 发送POST请求到API
  fetch("/ty-json/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(commentData),
  })
    .then(async (response) => {
      console.log("响应对象:", response);
      console.log("状态码:", response.status);
      console.log("状态文本:", response.statusText);

      // 检查响应状态
      if (!response.ok) {
        // 尝试解析错误响应
        let errorMsg = `HTTP错误: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMsg = errorData.message || errorMsg;
        } catch (e) {
          // 如果解析JSON失败，使用响应文本
          try {
            const errorText = await response.text();
            errorMsg = errorText || errorMsg;
          } catch (e) {
            // 忽略错误
          }
        }
        throw new Error(errorMsg);
      }

      // 检查响应内容是否为空
      const contentLength = response.headers.get("content-length");
      console.log("Content-Length:", contentLength);

      // 尝试获取响应文本
      const responseText = await response.text();
      console.log("响应文本:", responseText);

      if (!responseText) {
        throw new Error("服务器返回空响应");
      }

      // 尝试解析JSON
      try {
        return JSON.parse(responseText);
      } catch (e) {
        throw new Error(
          "服务器返回了无效的JSON格式: " +
            responseText.substring(0, 100) +
            "..."
        );
      }
    })
    .then((data) => {
      // 显示成功消息
      showMessage("评论提交成功！", "success");
      console.log("评论提交成功:", data);

      // 清空表单（保留cid）
      const cidValue = document.getElementById("cid").value;
      document.getElementById("commentForm").reset();
      document.getElementById("cid").value = cidValue;
    })
    .catch((error) => {
      // 显示错误消息
      showMessage("错误: " + error.message, "error");
      console.error("提交评论时出错:", error);
    })
    .finally(() => {
      // 恢复提交按钮状态
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    });
});

function showMessage(text, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = text;
  messageDiv.className = "message " + type;

  // 错误消息5秒后清除，成功消息3秒后清除
  const timeout = type === "error" ? 5000 : 3000;
  setTimeout(() => {
    if (messageDiv.textContent === text) {
      messageDiv.textContent = "";
      messageDiv.className = "";
    }
  }, timeout);
}

// 页面加载完成后自动聚焦到第一个输入框
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("author").focus();
});
```

## 字段查询值

> TTDF 内置了字段查询文章列表功能

### 普通查询

普通字段查询文章

```bash
GET /ty-json/fields/{name}/{value}
```

### 高级查询

#### 复杂查询 ​​ 使用 JSON

```bash
GET /ty-json/advancedFields?conditions=[{"name":"color","value":"red"},{"name":"price","operator":">=","value":100}]
```

#### 模糊搜索 ​

```bash
GET /ty-json/advancedFields/title/%重要%?operator=LIKE
```

### 查询运算符与值类型规范

#### 运算符对照表

| 运算符 | 名称     | 描述           | 使用示例            |
| ------ | -------- | -------------- | ------------------- |
| =      | 等于     | 完全匹配字段值 | `color=red`         |
| !=     | 不等于   | 排除指定值     | `color!=blue`       |
| >      | 大于     | 数值比较       | `price>100`         |
| <      | 小于     | 数值比较       | `price<200`         |
| >=     | 大于等于 | 数值比较       | `price>=100`        |
| <=     | 小于等于 | 数值比较       | `price<=200`        |
| LIKE   | 模糊匹配 | 支持通配符%    | `title LIKE %重要%` |

#### 值类型定义

| 类型  | 说明               | 典型应用场景      | 示例             |
| ----- | ------------------ | ----------------- | ---------------- |
| str   | 字符串（默认类型） | 文本字段精确匹配  | `category=tech`  |
| int   | 整型数字           | ID/数量等数值比较 | `views>1000`     |
| float | 浮点数字           | 价格等精确数值    | `price<=19.99`   |
| text  | 长文本             | 内容全文检索      | `content=查询词` |

### 注意事项

- 字段名和值区分大小写
- 特殊字符需要进行 URL 编码
