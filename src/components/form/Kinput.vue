<template>
    <div>
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs"/>
    </div>
</template>

<script>
    export default {
                inheritAttrs: false,//设置false 取消父元素上的属性设置到根元素上
        props: {
            value: {
                type: String,
                default: ''
            },
            type:{
                type:String,
                default:"text"
            }
        },
        methods: {
            onInput(e) {
                // console.log();
                this.$emit("input",e.target.value)
                this.$parent.$emit("validate")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>