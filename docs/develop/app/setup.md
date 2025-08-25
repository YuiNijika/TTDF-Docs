# 主题设置项

| 字段类型     | 描述             |
| ------------ | ---------------- |
| Text         | 文本框           |
| Textarea     | 文本域           |
| Radio        | 单选框           |
| Select       | 下拉框           |
| Checkbox     | 多选框           |
| DialogSelect | 对话框选择器     |
| AddList      | 动态列表         |
| ColorPicker | 颜色选择器       |
| Html         | 自定义 HTML 标签 |

## 调用设置

```php
Get::Options('name');
get_options('name');
```

> 默认为 return, 需 echo 返回则 Get::Options('name', true);

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
                'value' => '',
                'label' => '副标题',
                'description' => '这是一个文本框，用于设置网站副标题，如果为空则不显示。'
            ],
            [
                // 'Textarea' => '文本域',
                'type' => 'Textarea',
                'name' => 'this_textarea',
                'value' => '',
                'label' => '文本域',
                'description' => '这是一个文本域~'
            ],
            [
                // 'AddList' => '动态列表',
                'type' => 'AddList',
                'name' => 'this_addlist',
                'value' => '项目1,项目2,项目3',
                'label' => '动态列表测试',
                'description' => '这是一个AddList组件，点击+1按钮可以添加新的输入框，数据以逗号分隔存储。'
            ]
        ]
    ],
    'select-elements' => [
        'title' => '选择设置',
        'fields' => [
            [
                // 'Radio' => '单选框',
                'type' => 'Radio',
                'name' => 'this_radio',
                'value' => 'option1',
                'label' => '单选框',
                'description' => '这是一个单选框~',
                'layout' => 'vertical', // horizontal: 横排, vertical: 竖排
                'options' => [
                    'option1' => '选项一',
                    'option2' => '选项二',
                    'option3' => '选项三'
                ]
            ],
            [
                // 'Select' => '下拉框',
                'type' => 'Select',
                'name' => 'this_select',
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
                'name' => 'this_checkbox',
                'value' => ['option1', 'option3'],
                'label' => '多选框',
                'description' => '这是一个多选框~',
                'layout' => 'horizontal', // horizontal: 横排, vertical: 竖排
                'options' => [
                    'option1' => '选项一',
                    'option2' => '选项二',
                    'option3' => '选项三'
                ]
            ],
            [
                // 'DialogSelect' => '对话框选择',
                'type' => 'DialogSelect',
                'name' => 'dialog_select_single',
                'value' => 'theme1',
                'label' => '主题选择',
                'description' => '点击按钮打开对话框选择主题，支持单选模式。',
                'title' => '选择主题',
                'multiple' => false,
                'options' => [
                    'theme1' => '默认主题',
                    'theme2' => '深色主题',
                    'theme3' => '简约主题',
                    'theme4' => '彩色主题'
                ]
            ],
            [
                // 'DialogSelect' => '对话框选择（多选）',
                'type' => 'DialogSelect',
                'name' => 'dialog_select_multiple',
                'value' => 'feature1,feature3',
                'label' => '功能选择（多选）',
                'description' => '点击按钮打开对话框选择功能，支持多选模式。',
                'title' => '选择功能模块',
                'multiple' => true,
                'options' => [
                    'feature1' => '评论系统',
                    'feature2' => '搜索功能',
                    'feature3' => '社交分享',
                    'feature4' => '统计分析',
                    'feature5' => '邮件通知'
                ]
            ],
            [
                // 'ColorPicker' => '颜色选择器',
                'type' => 'ColorPicker',
                'name' => 'theme_color',
                'value' => '#3498db',
                'label' => '主题颜色',
                'description' => '选择网站的主题颜色，支持十六进制颜色值输入。'
            ],
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
