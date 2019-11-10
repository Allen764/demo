<template>
  <div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item) in lbtt" :key="item.id">
                        <img :src="item.src" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{detail.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p><span>市场价：{{detail.market_price}}</span><span>销售价：{{detail.sell_price}}</span></p>
                    <p style="padding: 0;margin: 0">购买数量</p>
                    <div class="mui-numbox" style="margin-bottom: 10px">
                        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                        <input class="mui-input-numbox" type="number">
                        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                    </div><br>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger">加入购物车</mt-button>
                </div>
            </div>

        </div>

        <div class="mui-card" style="margin-bottom: 50px">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{detail.goods_no}}</p>
                    <p>库存情况：{{detail.stock_quantity}}</p>
                    <p>上架时间：{{detail.add_time}}</p>
                </div>
            </div>

            <div class="mui-card-footer">
                <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined"><router-link :to="'/home/moreList?id='+this.$route.query.id">图文介绍</router-link></button><br>
                <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined"><router-link :to="'/home/comments?id='+this.$route.query.id">商品评论</router-link></button>
            </div>
        </div>


    </div>

</template>
<script>
export default {
        name: "detail",
        created() {
            this.getdetail();
            this.detaill()
        },
        data() {
            return {
              // 从路由中获取ID
                detail: [],
                id:this.$route.query.id,
                lbtt:[]
            }
        },
        methods: {
            detaill(){
                this.$axios.get('api/getthumimages/'+this.id)
                    .then(res =>{
                            this.lbtt = res.data.message;
                            console.log(res);
                        console.log(this.id);
                    })
            },
            getdetail() {
                this.$axios.get('api/goods/getinfo/'+this.id)
                    .then(res => {
                        /*console.log(res);*/
                        if (res.data.status === 0) {
                            this.detail = res.data.message[0]
                        }
                    })
            },
        }
    }
</script>
<style lang="less">
        .mint-swipe {
        height: 245px;
        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }

        }
    }
</style>