class Compiler {
  //el是宿主元素
  //vm是Kvue实例
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      this.complie(this.$el);
    }
  }

	
  complie(el) {

		// 遍历el树
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
			// console.log(this.isElement(node));
      if (this.isElement(node)) {
        // console.log("编译元素" + node.nodeName);
				this.complieElement(node)
      } else if (this.isInter(node)) {
        // console.log("编译插值绑定" + node.textContent);
        this.compileText(node);
      }

      if (node.childNodes && node.childNodes.length > 0) {
        this.complie(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }

  isInter(node) {
		// console.log(node.textContent);
    // 正则()分组
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  compileText(node) {
    node.textContent = this.$vm[RegExp.$1];
  }

	complieElement(node){
		//节点是元素
		//遍历属性列表
		const nodeAttrs = node.attributes
		Array.from(nodeAttrs).forEach(attr=>{
			// 以k-xx="oo"为例
			const attrName = attr.name // k-xx
			const exp = attr.value // oo counter
			if(this.isDirective(attrName)){
				const dir = attrName.substring(2)//xx

				//执行指令
				this[dir] && this[dir](node,exp)
			}
		})
	}

	isDirective(attr){
		return attr.indexOf('k-') === 0
	}
	text(node ,exp){
		node.textContent = this.$vm[exp]
	}
  html(node,exp){
    node.innerHTML = this.$vm[exp]
  }
}
