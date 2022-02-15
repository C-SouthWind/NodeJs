//导入path模块 nodejs内置模块
const path = require("path");
//定义JS打包规则
module.exports = {
    //入口函数从哪里开始进行编译打包
    entry : "./src/main.js",
    //编译成功以后吧内容输出位置
    output:{
        //定义输出的指定目录 __dirname当前项目根目录，产生一个dist文件夹
        path:path.resolve(__dirname,"./dist"),
        //合并的js文件存储在dist/bundle.js文件中
        filename:"bundle.js"
    },
    module:{
        rules:[{
            test:/\.css$/,//把项目中所有的.css结尾的文件进行打包
            use:["style-loader","css-loader"]
        }]
    }
}
