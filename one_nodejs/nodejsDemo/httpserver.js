//导入模块是require  就类似与import java.io包
const http = require('http')

//1.创建一个httpserver服务
http.createServer(function (request,response) {

    //浏览器怎么认识hello world！！！
    response.writeHead(200,{'Content-type':'text/plain'});//这句话含义是：告诉浏览器将以text/plain去解析hello server这段代码
    //给浏览器输出的内容
    response.end("hello world!!!!");
})
    //2.监听一个端口8888
    .listen(8888);
console.log("你启动的服务是：http://localhost:8888以启动成功！")
//3.启动运行服务 node httpserver.js

//4.在浏览器访问 http://localhost:8888