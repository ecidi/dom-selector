/**
 * Copyright (c) 2017-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import _ from 'lodash';

// 判断节点是否拥有 className
function hasClass(el, className){
	if (el.classList) {
		return el.classList.contains(className);
	}
	else {
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}

// 选择靠自己最近的且符合要求的父节点
// 如果自身符合要求则返回自身
function closest(el, className){
	let findParent = false;
	let parent = el;
	while(!findParent){
		// 到 body 终止查询
		if (parent.nodeName === 'BODY') {
			el = undefined;
			break;
		}
		findParent = hasClass(parent, className);
		// 找到元素则保留值，没有则继续递归
		if (findParent) {
			el = parent;
		} else {
			parent = parent.parentNode;
		}
	}
	return el;
}

// 选择符合要求的直接子节点
function children(el, className){
	const list = [];
	_.forEach(el.children, function(child){
		if(hasClass(child, className)){
			list.push(child);
		};
	});
	return list;
}

// 对外接口
export default {
	hasClass,
	closest,
	children
};
