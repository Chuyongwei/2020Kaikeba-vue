import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)




export function createRouter (){
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
      {path:"/",component:Home},
      {path:"/about",component:About}
    ]
  })
}
