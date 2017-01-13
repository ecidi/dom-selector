
# API文档



### 父节点选择

**closest(el, className)**

功能：就近查询符合class要求的父节点。

| 参数        | 描述         |
| :-------- | :--------- |
| el        | dom元素      |
| className | 父节点的class值 |

返回值：查询到的父节点或者undefined。

```javascript
closest(el, 'ant-row');
```

