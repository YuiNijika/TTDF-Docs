# 主题设置项

| 字段类型 | 描述             |
| -------- | ---------------- |
| Text     | 文本框           |
| Textarea | 文本域           |
| Radio    | 单选框           |
| Select   | 下拉框           |
| Checkbox | 多选框           |
| Html     | 自定义 HTML 标签 |

## 调用设置

``` php
Get::Options('name');
get_options('name');
```

> 默认为return, 需echo返回则 Get::Options('name', true);

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
                'content' => '<div class="alert success">感谢使用<a href="https://github.com/YuiNijika/TTDF">TTDF</a>进行开发</div>'
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
                'description' => '这是一个文本域~'
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
                'description' => '这是一个单选框~',
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
                'description' => '这是一个下拉框~',
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
                'description' => '这是一个多选框~',
                'options' => [
                    'option1' => '选项一',
                    'option2' => '选项二',
                    'option3' => '选项三'
                ]
            ]
        ]
    ],
    'HTML-Demo' => [
        'title' => 'HTML示例',
        // 定义HTML TAB栏
        'html' => [
            [
                // 'Content' => '自定义输出HTML内容',
                'content' => '
                    <div class="alert info">信息提示</div>
                    <div class="alert success">成功提示</div>
                    <div class="alert warning">警告提示</div>
                    <div class="alert error">错误提示</div>
                '
            ],
        ]
    ],
];
```