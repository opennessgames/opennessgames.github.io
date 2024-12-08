/*
 * @Author: xixi_
 * @Date: 2024-12-07 13:45:21
 * @LastEditors: xixi_
 * @LastEditTime: 2024-12-07 13:46:41
 * @FilePath: /opennessgames.github.io/document/wiki/xixi/js/main.js
 * Copyright (c) 2020-2024 by xixi_ , All Rights Reserved. 
 */
function changePage(url) {
    var iframe = document.getElementById("XContentIframe");    /* 获取iframe元素 */
    iframe.src = url;    /* 设置iframe的src属性，切换页面 */
}