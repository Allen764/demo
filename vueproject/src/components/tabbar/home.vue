<template>
    <div>
        <!--banner-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item) in banner" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!--六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/photoList">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <router-link to="/home/shopList" >
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "home",
        created() {
            this.getBanner();
        },
        data() {
            return {
                banner: []
            }
        },
        methods: {
            getBanner() {
                this.$axios.get('http://localhost:3306/category/queryTopCategory')
                    .then(res => {
                        console.log(res);
                        if (res.data.status === 0) {
                            this.banner = res.data.message;
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .mui-grid-view{
        background: #fff;
        img{
            width: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }

    }
    .mui-table-view-cell{
        border:none !important;
    }

</style>