let Vue;

class Store {
  constructor(options) {
		this._mutations = options.mutations
    this._actions = options.actions
		// console.log("vue",options);
    this._vm = new Vue({
      data: {
        // $$ vue不做代理
       $$state:  options.state,
      }
    });

    // 绑定commit和dispatch的上下文store实例
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state(){
    console.log(this._vm);
    return this._vm._data.$$state
  }

set state(v){
  console.error("你造吗?你这样不好!");
}

	commit(type,payload){
		const  entry = this._mutations[type]
		if(entry){
			entry(this.state,payload)
		}
	}

  dispatch(type,payload){
		const  entry = this._actions[type]
		if(entry){
			entry(this.state,payload)
		}
	}
}

function install(_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default {
  Store,
  install,
};
