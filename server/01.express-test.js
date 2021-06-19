// node js代码
const express  = require('express')

//获取实例
const server = express()


//编写路由处理不同url请求
server.get('/',(req,res)=>{
	res.send("<strong>hello world</strong>")
})

server.listen(  8080 ,()=>{
	console.log("server running");
})
