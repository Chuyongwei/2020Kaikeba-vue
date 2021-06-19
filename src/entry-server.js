//调用mian里的工厂函数创建实例
import { createApp } from './main';

// 该函数会被express路由器处理函数调用，用于vue的调用
export default context =>{
	//返回promise，确保异步的操作都结束
	return new Promise((resolve,reject)=>{
		const {app,router}= createApp(context)

		//显示首屏处理
		router.push(context.url)

		router.onReady(()=>{
			resolve(app)
		},reject)
	})
}