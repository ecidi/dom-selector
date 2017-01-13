
### dom-selector-  v 0.0.2

*—— 感谢 [YouMightNotNeedjQuery](http://YouMightNotNeedjQuery.com)*

DOM 元素选择器。

制作 UI 的过程中发现 react 或者 querySelector 对操作 dom 节点还是略显不足，尤其是发现父节点等操作。

初期考虑使用 jquery 的 css3 选择器 [sizzle](https://github.com/jquery/sizzle) ，不过依然缺少复杂的节点操作。

当然，jquery 本身太大，肯定也是不予考虑的。

所以最终选择自己整理一套简单方便的 DOM 元素选择器，希望能帮到大家快速书写代码。

在此感谢 [YouMightNotNeedjQuery](http://YouMightNotNeedjQuery.com) 的帮助。



当然从 DOM 元素选择器延伸而出，如何取值也是一件需要考虑的事情。

#### 使用方式

ES6 方式：

```javascript
import $ from 'dom-selector';

// 调用方式
$.closest(el, className);
```

其它详见 [API 文档](https://github.com/ecidi/dom-selector/blob/v0.0.1/API.md)。

#### License

[GPL](https://tldrlegal.com/license/gnu-general-public-license-v2)







