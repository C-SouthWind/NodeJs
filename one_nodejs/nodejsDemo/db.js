//1.导入mysql依赖包，mysql属于第三方的模块 类似于java.sql 一样
let mysql = require('mysql');

//2.创建一个mysql的connection对象

//3.配置数据链接的信息
var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    port:"3306",
    password:"chj0526",
    database:"test"
});
//4.建立链接
connection.connect();
//5.执行curd
connection.query("select * from user",function (error,result,field) {
    //如果查询出错，直接抛出
    if (error)throw error
    //查询成功
    console.log("result = " +result);
});
//6.关闭链接
connection.end();

//7.运行db.js 查看效果