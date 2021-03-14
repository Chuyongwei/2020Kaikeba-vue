export default{
    render(h){
      // 获取path对应的component
      // let component = null
/*      this.$router.$options.routes.forEach(route=>{
        if(route.path === this.$router.current){
          console.log(route);
          component  =route.component
        }
      })*/
      console.log("$router",this.$router);
      const {routeMap,current} = this.$router
      console.log(routeMap[current]);
      const component = routeMap[current].component||null

      return h(component)
    }
  }