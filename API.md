
# API文档

### 节点操作

**hasClass(el, className)**

功能：判断节点是否拥有className。

| 参数        | 类型     | 描述        |
| :-------- | :----- | --------- |
| el        | node   | dom元素     |
| className | string | 节点的class值 |

返回值：true或者false。

```javascript
$.hasClass(el, 'del-row');
```



### 父节点选择

**closest(el, className)**

功能：查询符合class要求的最近父节点。

| 参数        | 类型     | 描述         |
| :-------- | :----- | ---------- |
| el        | node   | dom元素      |
| className | string | 父节点的class值 |

返回值：父节点或者undefined。

```javascript
$.closest(el, 'del-row');
```



### 子节点操作

**children(parent, className)**

功能：查询符合class要求的直接子节点。

| 参数        | 类型     | 描述           |
| :-------- | :----- | ------------ |
| parent    | node   | dom元素        |
| className | string | 直接子节点的class值 |

返回值：数组或者[]。

```javascript
$.children(parent, 'del-row');
```

