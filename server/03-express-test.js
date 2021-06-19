// node js代码
const express = require("express");
const path = require("path")
const fs= require("fs")

//获取实例
const server = express();
  // 1.创建vue实例
  const Vue = require("vue");
   //2.获取渲染器实例
   const { createRenderer } = require("vue-server-renderer");
   const renderer = createRenderer();

   //处理favicon
   const favicon = require("serve-favicon")
   server.use(favicon(path.join(__dirname,"../public","favicon.ico")))

//编写路由处理不同url请求
server.get("/*", (req, res) => {
	const template= req.url.substr(1) || 'index'

	// 加载模板
	const buffer = fs.readFileSync(path.join(__dirname,`${template}.html`))
  const app = new Vue({
    template: buffer.toString(),
	data(){
		return {msg:"vue ssr"}
	},
	methods:{
		onClick(){
			console.log("do somthing");
		}
	}
  });
 
  //3.用渲染器渲染vue实例
  renderer
    .renderToString(app)
    .then((html) => {
		console.log(req.url,"ok");//这是在服务器，所以会打印到服务器上
      res.send(html)
    })
    .catch((e) => {
		// 返回状态码设为500,不然返回200让别人以为运行没问题
		res.status(500)
      res.send("Internal Server Error,500!",e)
    });
});

server.listen(8080, () => {
  console.log("server running");
});
