// node js代码
const express  = require('express')

//获取实例
const server = express()


//
server.get('/',(req,res)=>{
	res.send("<strong>hello world</strong>")
})

server.listen(  8080 ,()=>{
	console.log("server running");
})
