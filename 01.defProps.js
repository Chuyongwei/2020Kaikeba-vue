const obj = {}

function defaultReactive (obj,key,val) {
	//对传入的obj进行传入的拦截
	Object.defineProperty(obj,key,{
		get(){
			console.log('get '+key);
			return val
		},
		set(newVal){
			if(newVal!=val){
				console.log('set '+key+':'+newVal);
				val = newVal
			}
		}
	})
  }

	defaultReactive(obj,'foo','foo')
	obj.foo
	obj.foo = 'fooooo'