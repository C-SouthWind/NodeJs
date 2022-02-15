//工具类
const sum = function (a,b) {
    return a + b;
}
const sub = function (a,b) {
    return a - b;
}
const mul = function (a,b) {
    return a * b;
}
const di = function (a,b) {
    return a / b;
}

//导出给别人使用  （必须导出了才能使用）
module.exports = {
    sum,sub,mul,di
}