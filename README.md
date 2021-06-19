# SSR

express

```powershell
npm i express -S
```

 `node 01-express-test.js`运行

使用`npm i nodemon -g`可以监视

```js
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
```
