// node js代码
const express = require("express");

//获取实例
const server = express();
  // 1.创建vue实例
  const Vue = require("vue");
   //2.获取渲染器实例
   const { createRenderer } = require("vue-server-renderer");
   const renderer = createRenderer();
//编写路由处理不同url请求
server.get("/", (req, res) => {

  const app = new Vue({
    template: "<h1 @click='onClick'>{{msg}}</h1>",
	data:{
		msg:"hello"
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
      res.send(html)
    })
    .catch((e) => {
		res.status(500)
      res.send("Internal Server Error,500!")
    });
});

server.listen(8080, () => {
  console.log("server running");
});
