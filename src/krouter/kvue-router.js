import Link from "./krouter-link"
import View from './krouter-view'

let Vue;

class KVueRouter {
  constructor(options) {
    this.$options = options;

    Vue.util.defineReactive(this,'current',"/") // 装载current属性

    // this.current = '/'
    //监控url变化
    window.addEventListener('hashchange',this.onHashChange.bind(this))
    window.addEventListener('load',this.onHashChange.bind(this))

    //创建一个路由表
    this.routeMap = {}
    options.routes.forEach(route=>{
      console.log(route);
      this.routeMap[route.path] = route
    })
  }


  onHashChange(){
    console.log(window.location.hash);
    this.current = window.location.hash.slice(1)
  }
}

KVueRouter.install = function(_Vue) {

  //保存构造函数,在KvueRouter里面的使用
  Vue = _Vue;


  // $挂载$router
  // 
  Vue.mixin({
    beforeCreate() {
      // console.log(this);

      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  Vue.component("router-link",Link);
  Vue.component("router-view", View);
};

export default KVueRouter;
