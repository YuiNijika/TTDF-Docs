# 文章字段

| 字段类型 | 描述   |
| -------- | ------ |
| Text     | 文本框 |
| Textarea | 文本域 |
| Radio    | 单选框 |
| Select   | 下拉框 |
| Checkbox | 多选框 |

## 注册示例

```php
return [
    [
        // Text
        'type' => 'Text', // 注册一个文本框
        'name' => 'Demo', // 设置项字段即调用名 get_fields('Demo', true);
        'value' => null, // 默认值
        'label' => '文本框', // 显示名
        'description' => '用于输入单行文本', // 描述
        // 添加字段属性
        'attributes' => [
            'style' => 'width: 100%;' // 自定义样式
        ]
    ],
];
```

## 完整示例

```php
return [
    [
        // Text
        'type' => 'Text',
        'name' => 'TTDF_Fields_Text',
        'value' => null, // 默认值为 null
        'label' => '文本框',
        'description' => '用于输入单行文本',
        // 添加字段属性
        'attributes' => [
            'style' => 'width: 100%;'
        ]
    ],
    [
        // Textarea
        'type' => 'Textarea',
        'name' => 'TTDF_Fields_Textarea',
        'value' => null, // 默认值为 null
        'label' => '文本域',
        'description' => '用于输入多行文本',
        // 添加字段属性
        'attributes' => [
            'style' => 'width: 100%;height: 100px;'
        ]
    ],
    [
        // Radio
        'type' => 'Radio',
        'name' => 'TTDF_Fields_Radio',
        'value' => null, // 默认值为 null
        'label' => '单选框',
        'description' => '用于选择一个选项',
        'options' => [
            'option1' => '选项一',
            'option2' => '选项二',
            'option3' => '选项三'
        ]
    ],
    [
        // Select
        'type' => 'Select',
        'name' => 'TTDF_Fields_Select',
        'value' => null, // 默认值为 null
        'label' => '下拉框',
        'description' => '用于从列表中选择',
        'options' => [
            'option1' => '选项一',
            'option2' => '选项二',
            'option3' => '选项三'
        ]
    ],
    [
        // Checkbox
        'type' => 'Checkbox',
        'name' => 'TTDF_Fields_Checkbox',
        'value' => [], // 默认值为空数组
        'label' => '多选框',
        'description' => '用于选择多个选项',
        'options' => [
            'option1' => '选项一',
            'option2' => '选项二',
            'option3' => '选项三'
        ]
    ]
];
```