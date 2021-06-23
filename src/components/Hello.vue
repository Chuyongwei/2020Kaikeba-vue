<template>
	<div class="hello">

<p><input type="text" name="a" id="a" @keydown.enter="addFeature"></p>

		<ul>
			<li v-for="feature in features" :key="feature">{{feature}}</li>
			<li>特性总数:{{count}}</li>
		</ul>
		
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
@Component({
	//vue2混合
})
	export default class Hello extends Vue{
		features: string[]= []
		addFeature(e:KeyboardEvent){
			let inp=e.target as HTMLInputElement
			this.features.push(inp.value)
			console.log("Dsaf",this.features);
			inp.value = ' '
		}

		created(){
			this.features = ["类型注解","变异语言"]
			console.log("create")
		}
		//存取器用于计算属性
		get count(){
			return this.features.length
		}
	}
</script>

<style scoped>

</style>