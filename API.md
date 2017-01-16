
# API文档



### 父节点选择

**closest(el, className)**

功能：就近查询符合class要求的父节点。

| 参数        | 类型     | 描述         |
| :-------- | :----- | ---------- |
| el        | node   | dom元素      |
| className | string | 父节点的class值 |

返回值：查询到的父节点或者undefined。

```javascript
$.closest(el, 'del-row');
```

