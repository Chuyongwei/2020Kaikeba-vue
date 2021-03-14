<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="error" style="color:red">{{error}}</p>

        <!-- 校验规则 -->
        <!-- <p>{{form.model}}</p> -->
    </div>
</template>

<script>
import Schema from "async-validator";
    export default {
        inject:["form"],
        data() {
            return {
                error: ''//error是空则通过
            }
        },
        props: {
            label: {
                type: String,
                default: ""
            },
            prop:{
                type:String
            }
        },
        mounted () {
            // console.log(this.form.model[this.prop]);
            this.$on('validate',()=>{
                this.validate()
            });
        },
        methods: {
            validate() {
                // console.log(this.form.rules[this.prop]);
                const rules = this.form.rules[this.prop]
                // console.log(this.form.model[this.prop]);
                const value = this.form.model[this.prop]
                const desc = {[this.prop]:rules}
                // 创建Schema
                const schema = new Schema(desc)
                schema.validate({[this.prop]:value},errors=>{
                    if(errors){
                        this.error = errors[0].message
                    }else{
                        // 校验通过
                        this.error = ""
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>