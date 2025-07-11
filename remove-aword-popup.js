// ==UserScript==
// @name         移除真题点击单词弹窗
// @namespace    https://github.com/yihngwan/
// @version      1.0
// @description  尝试移除英语考研真题上的点击单词的弹窗，减少误触提高做题时候的专注
// @author       yihngwan
// @match        *://zhenti.burningvocabulary.cn/*
// @grant        none
// @icon         https://zhenti.burningvocabulary.cn/favicon-16x16.png
// @homepage     https://github.com/yihngwan/remove-aword-popup
// @updateURL    https://github.com/yihngwan/remove-aword-popup/raw/refs/heads/main/remove-aword-popup.js
// @downloadURL  https://github.com/yihngwan/remove-aword-popup/raw/refs/heads/main/remove-aword-popup.js
// ==/UserScript==

(function() {
    document.documentElement.addEventListener('click', function(e) {
        const t = e.target;
        // 精确拦截特定条件下的查词逻辑：AWORD 标签 或 class="aword"
        if (t.tagName.toUpperCase() === 'AWORD' || t.classList.contains('aword')) {
            e.stopImmediatePropagation();
            // console.log('阻止了单词点击事件');
        }
    }, true); // 捕获阶段
})();
