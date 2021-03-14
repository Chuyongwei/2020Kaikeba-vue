import Vue from "vue";
import Notice from "@/components/Notice.vue"

function create(Component, props) {
  // 组件的构造函数如何获取
  // 1. Vue.extend()
  // 2. render
  const vm = new Vue({
    // h是createElement,返回VNode,是虚拟dom
    // 需要挂载
    render: (h) => h(Component, { props }),
  }).$mount(); // 不制定宿主元素,则会创建真实dom,但是不会追加操作
  // 获取真实dom
  document.body.appendChild(vm.$el);

  const comp = vm.$children[0];

  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };

  return comp;
}

export default {
  install(Vue){
    Vue.prototype.$notice = function (options) {
      return create(Notice,options)
      }
  }
};
