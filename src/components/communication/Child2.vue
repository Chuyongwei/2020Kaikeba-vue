<template>
    <div>
        <!-- $listeners会被展开监听 -->
        <h3  v-on="$listeners"> child2</h3>
        <button @click="sendToChild1">给child1发送消息</button>
        <!-- $attrs:获取组件上定义的属性 -->
        <div>{{$attrs.msg}}</div>
        <!-- provide/inject -->
        <p>{{foo}}</p>
    </div>
</template>

<script>
    export default {
        // inject:['foo'],
        inject:{
            foo:{from:'foo'}
        },
        methods: {
            sendToChild1() {
                this.$parent.$emit("event-from-clid2","some msg from parent")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>