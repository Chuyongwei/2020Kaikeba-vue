<template>
    <div>
        <h2>组建通信</h2>
        <child-1 msg="some msg from parent" @some-event="onSomeEvent">

        </child-1>
        <child-2 msg="some msg from parent" @click="onClick"></child-2>
        <button @click="goHome">回家吃饭</button>
    </div>
</template>

<script>
import Child1 from "@/components/communication/Child1";
import Child2 from "@/components/communication/Child2";
    export default {
        provide(){
            return{
                foo: 'fooooooooooooooo',
                comp: this
            }
        },
        components: {
            Child1, Child2
        },
        methods: {
            onSomeEvent(msg) {
                console.log("Communtion:",msg);
            },
            goHome(){
                this.$children[0].eat()
            },
            onClick(){
                console.log('来老爹的回调函数处理',this);

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>