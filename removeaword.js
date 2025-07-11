// ==UserScript==
// @name         移除考研真题点击单词跳转
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  尝试移除网页上的点击事件监听器
// @author       yihngwan
// @match        *://zhenti.burningvocabulary.cn/*
// @grant        none
// @icon         https://zhenti.burningvocabulary.cn/favicon-16x16.png
// ==/UserScript==
(function() {
   // 'use strict';

    document.documentElement.addEventListener('click', function(e) {
        const t = e.target;

        // 精确拦截特定条件下的查词逻辑：AWORD 标签 或 class="aword"
        if (t.tagName.toUpperCase() === 'AWORD' || t.classList.contains('aword')) {
            e.stopImmediatePropagation();
            // console.log('阻止了单词点击事件');
        }
    }, true); // 捕获阶段
})();
