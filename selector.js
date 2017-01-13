/**
 * Copyright (c) 2017-present, ecidi.
 * All rights reserved.
 *
 * This source code is licensed under the GPL-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

function closest(el, className){
    let findParent = false;
    let parent = el.parentNode;
    while(!findParent){
        // 到 body 终止查询
        if (parent.nodeName === 'BODY') {
            el = undefined;
            break;
        }
        // 判断节点是否拥有 className
        if (parent.classList) {
            findParent = parent.classList.contains(className);
        }
        else {
            findParent = new RegExp('(^| )' + className + '( |$)', 'gi').test(parent.className);
        }
        // 找到元素则保留值，没有则继续递归
        if (findParent) {
            el = parent;
        } else {
            parent = parent.parentNode;
        }
    }
    return el;
}

// 对外接口
export default {
    closest
};
