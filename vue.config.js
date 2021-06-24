module.exports = {
	devServer:{
		before(app){
			app.get('/api/list',(req,res)=>{
				res.json([
					{id:1,name:"类型编译"},
					{id:2,name:"编译语言"}
				])
			})
		}
	}
}