## 使用指南

```js
import { Table, TableColumn } from 'border-ui';

Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
```

#### 基本用法
```vue
<bo-table :data="tableData">
  <template slot-scope="{row}">
    <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
    <bo-table-column label="日期">{{ row.date }}</bo-table-column>
    <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
    <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
  </template>
</bo-table>
```

```js
tableData: [
  {
    date: "2016-05-02",
    name: "小伙儿",
    age: 21,
    sex: 0
  }
  ...
]
```

#### 带下划线
```vue
<bo-table :data="tableData" underline>
  <template slot-scope="{row}">
    <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
    <bo-table-column label="日期">{{ row.date }}</bo-table-column>
    <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
    <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
  </template>
</bo-table>
```

#### 表头高亮
```vue
<bo-table :data="tableData" thBg="#CCC">
  <template slot-scope="{row}">
    <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
    <bo-table-column label="日期">{{ row.date }}</bo-table-column>
    <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
    <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
  </template>
</bo-table>
```

#### 表头高亮
```vue
<bo-table :data="tableData" thBg="#CCC" stripe>
  <template slot-scope="{row}">
    <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
    <bo-table-column label="日期">{{ row.date }}</bo-table-column>
    <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
    <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
  </template>
</bo-table>
```

#### 表格边框
```vue
<bo-table :data="tableData" thBg="#CCC" stripe border>
  <template slot-scope="{row}">
    <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
    <bo-table-column label="日期">{{ row.date }}</bo-table-column>
    <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
    <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
  </template>
</bo-table>
```

#### 右对齐
```vue
<bo-table :data="tableData" thBg="#CCC" stripe border align="right">
  <template slot-scope="{row}">
    <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
    <bo-table-column label="日期">{{ row.date }}</bo-table-column>
    <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
    <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
  </template>
</bo-table>
```

## API
| 参数           | 说明                                             | 类型            | 默认
| ------------- |:------------------------------------------------ | :-------------: | :-----:  |
| data          | 表格数据                                          | Array           | []       |
| align         | 表格对齐方式(left、center、right)                  | String          | center   |
| stripe        | 隔行换色                                          | Boolean         | false    |
| thBg          | 表头背景色                                        | String          |          |
| thColor       | 表头i文字颜色                                     | String          | #000      |
| underline     | 表格下边框                                        | Boolean         | false     |
| border        | 表格边框线                                        | Boolean         | false     |