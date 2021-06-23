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