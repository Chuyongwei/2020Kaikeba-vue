//类型注解
let var1:string
var1="开课吧"
// var1=1

//类型推论
let var2 = true
// var2=1


//类型任意
let varAny:any
varAny = 'xxx'
varAny = 32

let arrAny:any[]
arrAny=[23,"ewr",true]

//函数类约束
function greet(person: string):string{
	return "所担负的算法"
}
const msg = greet("sdf")

// void 做逻辑操作不返回值
function warn():void{

}

// 对象object，不是原始类型的就是对象类型
function fn1(o:object){}
fn1({prop:0})
// fn1(2)

function fn2(o:{prop:number}){
	o.prop
}

fn2({prop:0})
// fun2({prop:"tom"})

//自定义类
type Prop = {prop:number}//这是类
let Prop = 2//这是变量
function fn3(o:Prop){}

//类性断言
const someValue :any = 'this is astrint'
const strLen = (someValue as string).length

//联合类型
let union:string |number
union = '1'
union=1

//交叉类型
type First = {first:number}
type Second = {second:number}

type FirstAndSecond = First&Second
function fn4():FirstAndSecond{
	return {first:1,second:2}
}

//*函数*
//1. 设置就是必填参数
//2. 默认值就是msg='abc'
//3. 可选参数？
function greeing(person:string,msg1='abc',msg2?:string):string{
	return ''
}

greet('tom')

// 函数的重载
// 先声名，再实现
//
function watch(cb1: ()=>void):void;
function watch(cb1: ()=>void,cb2: (v1:any,v2:any)=>void):void;
//实现
function watch(cb1:()=>void,cb2?: (v1:any,v2:any)=>void){
	if(cb1&&cb2){
		console.log("执行重载2");
	}else{
		console.log("执行重载1");
		
	}
}
// watch()
class Parent{
	private _foo = "foo"
	protected bar = "bar"

	constructor(public tua = "tua"){}

	private someMethod(){}

	get foo(){
		return this._foo
	}
	set foo(val){
		this._foo = val;
	}
}

const p = new Parent()
p.foo="fooss"
class Child extends Parent{

	say(){
		this.bar
	}
}
const c = new Child()