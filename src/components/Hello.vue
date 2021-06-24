<template>
	<div class="hello">
		<div id="app">{{msg}}</div>
<p><input type="text" name="a" id="a" @keydown.enter="addFeature"></p>

		<ul>
			<li v-for="feature in features" :key="feature.id">{{feature.name}}</li>
			<li>特性总数:{{count}}</li>
		</ul>
		
	</div>
</template>

<script lang="ts">
	import { Component, Vue,Prop } from 'vue-property-decorator';
	// import {Feature} from '@/types';
	// import {getFeatures}from '@/api/feature'
@Component
	export default class Hello extends Vue{

		features: Feature[]= []

		@Prop({type:String,required:true})
		msg!:string;

		addFeature(e:KeyboardEvent){
			let inp=e.target as HTMLInputElement
			this.features.push({id:this.features.length+1,name:inp.value})
			console.log("Dsaf",this.features);
			inp.value = ' '
		}

		created(){
			// getFeatures().then(res=>{
			// 	this.features = res.data
			// })
			// console.log(this.$axios);
			this.$axios.get<Feature[]>("/api/list").then(res=>{
				this.features = res.data
			})
			// this.features = [{id:0,name:"类型注解"}]
		}
		//存取器用于计算属性
		get count(){
			return this.features.length
		}
	}
</script>

<style scoped>

</style>