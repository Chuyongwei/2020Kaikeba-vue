//客户端也要vue实例
//调用mian里的工厂函数创建实例
import { createApp } from './main';
const {app,router}= createApp()

router.onReady(()=>{
	app.$mount('#app',true)
})

