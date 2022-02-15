"use strict";

//工具类
var sum = function sum(a, b) {
    return a + b;
};
var sub = function sub(a, b) {
    return a - b;
};
var mul = function mul(a, b) {
    return a * b;
};
var di = function di(a, b) {
    return a / b;
};

//导出给别人使用  （必须导出了才能使用）
module.exports = {
    sum: sum, sub: sub, mul: mul, di: di
};