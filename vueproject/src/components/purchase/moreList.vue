<template>
    <div class="more">
        <h3>{{item.title}}</h3>
        <div v-html="item.content"></div>
    </div>
</template>
<script>
export default {
    name:"item",
    created(){
        this.getMore()
    },
    data(){
        return{
            item:[],
            id:this.$route.query.id,
        }
    },
    methods: {
        getMore(){
            this.$axios.get('/api/goods/getdesc/'+this.id).then(res =>{
                console.log(res)
                this.item = res.data.message[0]
            })
        }
    },
}
</script>
<style lang="less" scoped>
    more{
        img {
            border: 0;
            width: 100%;
        }
    }
</style>