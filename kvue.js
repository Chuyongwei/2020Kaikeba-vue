function defaultReactive(obj, key, val) {
  //递归
  observe(val);

  const dep = new Dep()

  //对传入的obj进行传入的拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log("get " + key);
      //依赖收集
      Dep.target && dep.addDep(Dep.target)
      return val;
    },
    set(newVal) {
      if (newVal != val) {
        console.log("set " + key + ":" + newVal);
        observe(newVal);
        val = newVal;

        //通知更新
        // watchers.forEach((w) => w.update());
        dep.notify()
      }
    },
  });
}

function observe(obj) {
  if (typeof obj !== "object" || obj == null) {
    return;
  }

  //创建Observer的实例
  new Observer(obj);
}

//代理函数方便直接访问$data的内容
function proxy(vm, sourcekey) {
  Object.keys(vm[sourcekey]).forEach((key) => {
    // 将$data的key代理到vm属性中
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourcekey][key];
      },
      set(newVal) {
        vm[sourcekey][key] = newVal;
      },
    });
  });
}

class KVue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;

    observe(this.$data);

    //代理
    proxy(this, "$data");

    // console.log(typeof this.$options.el);
    new Compiler(options.el, this);
  }
}

class Observer {
  constructor(value) {
    this.value = value;

    if (typeof value === "object") {
      this.walk(value);
    }
  }

  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defaultReactive(obj, key, obj[key]);
    });
  }
  // 数组数据响应化

}

const watchers = [];

//  观察者
class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    // watchers.push(this);

    // Dep。target设置为当前watcher实例
    Dep.target = this
    this.vm[this.key]
    Dep.target = null // 收集完就

  }
  update() {
    this.updateFn.call(this.vm, this.vm[this.key]);
  }
}

//管理某ge
class Dep{
  constructor(){
    this.deps = []
  }

  addDep(dep){
    this.deps.push(dep)
  }

  notify(){
    this.deps.forEach(dep=>dep.update())
  }
}