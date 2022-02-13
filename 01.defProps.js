function defaultReactive(obj, key, val) {

	//递归
	observe(val)

	//对传入的obj进行传入的拦截
	Object.defineProperty(obj, key, {
		get() {
			console.log('get ' + key);
			return val
		},
		set(newVal) {
			if (newVal != val) {
				console.log('set ' + key + ':' + newVal);
				observe(newVal)
				val = newVal
			}
		}
	})
}

function observe(obj) {
	if (typeof obj !== 'object' || obj == null) {
		return
	}
	Object.keys(obj).forEach(key => {
		defaultReactive(obj, key, obj[key])
	})
}

function set(obj, key, val) {
	defaultReactive(obj, key, val)
}

const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 }, arr: [] }

observe(obj)

obj.foo
obj.foo = "foooooo"

obj.baz = { a: 12 }
obj.baz.a = 10
set(obj, 'dong', 'dong')
obj.dong = "dsaf"
//Object.defineProperty()对数组无效
// 改变数组的方法只有7个
obj.arr.push(4)