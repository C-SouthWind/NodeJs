1: npm：node package manager ,node包管理器，类似于maven
作用：
    1：快速构建nodejs工程
    
        -npm init（-npm init -y 自动帮我们定义好下面的内容）
            -得到package.json 这个文件里的内容如下：
            {
              "name": "one_nodejs", //工程名
              "version": "1.0.0",   //版本
              "main": "index.js",   //如果js
              "scripts": {          //运行脚本
                "test": "echo \"Error: no test specified\" && exit 1"
              },
              "keywords": [],
              "author": "",         //开发者
              "license": "ISC",     //授权协议
              "dependencies": {     //安装的模块
                "mysql": "^2.18.1"
              },
              "devDependencies": {},
              "description": ""//描述
            }
            类似于：pom.xml 文件作用管理依赖
            
    2：快速安装和依赖第三方模块。比如npm install mysql redis等等。
        2.1：快速安装依赖第三方模块？
             npm install xxxx 或者 npm i xxxx模块名
        2.2：安装模块在什么地方？
             安装的模块会放入到项目的node_modules文件夹中（自动创建的文件夹）
        2.3：安装模块如何使用？
             -require
                 //导入模块redis
                 const redis = require("redis");
                 //导入模块mysql
                 const mysql = require("mysql");
        2.4：模块和package.json有什么关系呢？
             "dependencies": {
                "mysql": "^2.18.1",
                "redis": "^4.0.2"
              }
              通过 npm install xxx 下载的文件会记录在package.json这个文件中
              就类似与maven中pom.xml一个含义，记录作用：复用
              1：pageage.json 记录的依赖模块
              2：通过npm install 可以直接把package.json所依赖的模块全部自动下载下来
                 这样就可以避免重复下载模块，很方便去集成的第三方模块
              3：下载的模块依赖过多 文件过大 所以不建议拷贝
        2.5：如果安装模块很慢怎么办？
            npm install -g cnpm --registry=https://registry.npm.taobao.org
            下载 cnpm install xxx
        2.6:如何运行？
            node xxxx.js 运行过程.js是可以省去的 终止的命令行：CTRL + C
        2.7：如何下载多个？
            npm install jquery vue redis mysql
            cnpm install jquery vue redis mysql
            cpm i xxx
        2.8：下载版本号
            npm install xxx@版本号
            具体的版本号：查看官方网址（不写版本号 默认是最新的）
        
    3：如何卸载模块呢？
        npm uninstall redis
    