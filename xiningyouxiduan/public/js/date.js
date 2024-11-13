/*
 * @Author: xixi_
 * @Date: 2024-11-04 19:31:13
 * @LastEditors: xixi_
 * @LastEditTime: 2024-11-13 20:10:02
 * @FilePath: /opennessgames.github.io/xiningyouxiduan/public/js/date.js
 * Copyright (c) 2020-2024 by xixi_ , All Rights Reserved. 
 */

var today = new Date();/* 获取现在的日期 */

// 获取年、月、日
var year = today.getFullYear();
var month = today.getMonth() + 1; // 月份从0开始，需要+1
var day = today.getDate();

// 输出结果
console.log("今天的公历日期是：" + year + "-" + month + "-" + day);


// 输入公历日期
const date = new Date(year, month, day); // 月份从0开始，所以9月对应的数字是8

// 将公历日期转换为农历日期
const lunarDate = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());

// 获取当前日期和时间
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();

// 获取星期几
var weekDay = currentDate.getDay();
var weekDays = ['日', '一', '二', '三', '四', '五', '六'];
var weekDayStr = '星期' + weekDays[weekDay];

// 获取农历日期
// ...

// 计算已过去的百分比
var today = new Date();
var startOfYear = new Date(today.getFullYear(), 0, 1);
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var totalDays = Math.ceil((today - startOfYear + 1) / millisecondsPerDay);
var percent = ((totalDays - 1) / 365 * 100).toFixed(2);

// 输出结果
var output = '今天是' + year + '年' + month + '月' + day + '日，' + weekDayStr + '，' + `农历${lunarDate.lunarMonth}月${lunarDate.lunarDay}` + '，' + year + '年已经过去了' + percent + '%' + '，' + '加油，今天也要过得充实有意义！😊💪👍';
console.log(output);

//更改页面文本
// 获取元素
var dateElement = document.querySelector('.date');
// 更改文本内容
dateElement.textContent = output;
