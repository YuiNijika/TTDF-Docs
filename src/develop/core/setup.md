# 主题设置项

| 字段类型 | 描述             |
| -------- | ---------------- |
| Text     | 文本框           |
| Textarea | 文本域           |
| Radio    | 单选框           |
| Select   | 下拉框           |
| Checkbox | 多选框           |
| Html     | 自定义 HTML 标签 |

## 注册示例

```php
return [
    '注册ID' => [
        'title' => 'tab标题',
        'fields' => [
            // 注册字段
            [
                'type' => 'Text', // 注册一个文本框
                'name' => 'Demo', // 设置项字段即调用名 get_options('Demo', true);
                'value' => null, // 默认值
                'label' => '演示', // 显示名
                'description' => '这是一个演示文本框。' // 描述
            ],
        ]
    ],
]
```

## 完整示例

```php
return [
    '基础设置' => [
        'title' => '基础设置',
        'fields' => [
            [
                // 'Html' => '自定义HTML标签',
                'type' => 'Html',
                'content' => '<h3>感谢使用 TTDF 进行开发</h3>'
            ],
            [
                // 'Text' => '文本框',
                'type' => 'Text',
                'name' => 'SubTitle',
                'value' => null,
                'label' => '副标题',
                'description' => '这是一个文本框，用于设置网站副标题，如果为空则不显示。'
            ],
            [
                // 'Textarea' => '文本域',
                'type' => 'Textarea',
                'name' => 'TTDF_Textarea',
                'value' => null,
                'label' => '文本域',
                'description' => '用于输入多行文本'
            ]
        ]
    ],
    'select-elements' => [
        'title' => '选择设置',
        'fields' => [
            [
                // 'Radio' => '单选框',
                'type' => 'Radio',
                'name' => 'TTDF_Radio',
                'value' => 'option1',
                'label' => '单选框',
                'description' => '用于选择一个选项',
                'options' => [
                    'option1' => '选项一',
                    'option2' => '选项二',
                    'option3' => '选项三'
                ]
            ],
            [
                // 'Select' => '下拉框',
                'type' => 'Select',
                'name' => 'TTDF_Select',
                'value' => 'option2',
                'label' => '下拉框',
                'description' => '用于从列表中选择',
                'options' => [
                    'option1' => '选项一',
                    'option2' => '选项二',
                    'option3' => '选项三'
                ]
            ],
            [
                // 'Checkbox' => '多选框',
                'type' => 'Checkbox',
                'name' => 'TTDF_Checkbox',
                'value' => ['option1', 'option3'],
                'label' => '多选框',
                'description' => '用于选择多个选项',
                'options' => [
                    'option1' => '选项一',
                    'option2' => '选项二',
                    'option3' => '选项三'
                ]
            ]
        ]
    ],
    'TTDF-Options' => [
        'title' => '其他设置',
        'fields' => [
            [
                'type' => 'Select',
                'name' => 'TTDF_RESTAPI_Switch',
                'value' => 'false',
                'label' => 'REST API',
                'description' => 'TTDF框架内置的 REST API<br/>详细教程见 <a href="https://github.com/Typecho-Framework/Typecho-Theme-Development-Framework#rest-api" target="_blank">官方文档 REST API 部分</a>',
                'options' => [
                    'true' => '开启',
                    'false' => '关闭'
                ]
            ],
        ]
    ],
    'HTML-Demo' => [
        'title' => 'HTML示例',
        // 定义HTML TAB栏
        'html' => [
            [
                // 'Content' => '自定义输出HTML内容',
                'content' => '<h2>欢迎使用TTDF框架</h2>
            <p>Typecho Theme Development Framework</p>
            <blockquote style="border-left: 4px solid #ccc; padding-left: 20px; margin: 20px 0;">
                <p>一个 Typecho 主题开发框架，设计之初是写给自己用的。<br>
                <del>还算不上框架只能说让开发变得更简单些</del></p>
            </blockquote>'
            ],
        ]
    ],
];
```