<template>
    <div @click="$emit('some-event','msg from child1')">
        <h3>child1</h3>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: ' '
            },
        },
        mounted () {
            // this.$bus.$on('event-from-clid2',msg=>{
            //     console.log('Child1:',msg);
            // });
                this.$parent.$on('event-from-clid2',msg=>{
                console.log('Child1:',msg);
            });
        },
        methods: {
            eat() {
               console.log("这就回去"); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>