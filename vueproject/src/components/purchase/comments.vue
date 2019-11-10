<template>
    <div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
    import  comment from '../subcomponents/comment.vue'
export default {
    name:"haha",
    components:{
        comment
    },
    data(){
        return{
            id:this.$route.query.id,
        }
    }
}
</script>
<style>

</style>