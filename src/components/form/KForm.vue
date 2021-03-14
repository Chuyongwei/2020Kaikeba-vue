<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    }
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      //
      const tasks = this.$children
      .filter(item=>item.prop)
       .map((item) => item.validate())
      //统一处理所有Promise结果
      Promise.all(tasks).then(()=>{
          cb(true)
          console.log("dsfdfs");
      }).catch(()=>cb(false))
    },
  },
}
</script>

<style lang="scss" scoped>
</style>