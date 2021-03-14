export default{
	props: {
		to: {
			type: String,
			required: true,
		},
	},
	render(h) {
		// template:'<a></a>'
		console.log(this.$slots);
		return h("a", { attrs: { href: "#" + this.to },class:"router-link" }, this.$slots.default);
		// return <a href={'#'+/this.to}>{this.$slots.default}</a>
		
	},
}