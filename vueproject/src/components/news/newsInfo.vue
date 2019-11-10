<template>
  <div class="newsInfo_container">
        <!--大标题-->
        <h3 class="title">{{  newsInfo.title }}</h3>
        <!--子标题-->
        <p class="subTitle">
            <span>发表时间 : {{ newsInfo.add_time | dateFormat }}</span>
        </p>
        <hr>
        <!--内容区域-->
        <div v-html="newsInfo.content"></div>
        <!--评论区域-->
        <comment :id="id"></comment>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        name: "newsInfo",
        components:{
            comment
        },
        data(){
            return {
                // 接
                newsInfo:{},
                id:this.$route.params.id
            }
        },

        created(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                this.$axios.get('api/getnew/'+this.$route.params.id,)
                    .then( res => {
                        if(res.data.status === 0){
                            this.newsInfo = res.data.message[0];
                        }
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
.newsInfo_container{
    padding: 5px;
    .title{
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }
    .subTitle{
        font-size: 13px;
        color: lightskyblue;
        display: flex;
        justify-content: space-between;
    }
}
</style>