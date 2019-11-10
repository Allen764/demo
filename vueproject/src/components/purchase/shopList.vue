<template>
  <div class="mui-card">
    <ul>
       <router-link :to="'/home/detail?id='+item.id"
                         tag="li" v-for="item in banner" :key="item.id">
             <img :src="item.img_url" alt="">
              <p>{{item.title}}</p>
               <s>{{item.market_price}}</s>
               <span>{{item.sell_price}}</span>
               <!-- <p style="float:left;">热卖中</p> -->
              <p style="text-align: right;">剩{{item.stock_quantity}}件</p>
        </router-link>
    </ul>
  </div>
</template>
<script>
export default {

  created() {
    this.shopList();
  },
  data() {
    return {
        banner:[],
        pageindex:[]
    };
  },
  methods: {
    // 获取商品
    shopList() {
      this.$axios.get(`/api/getgoods?pageindex=${this.pageindex}`).then(res => {
        console.log(res);
        if (res.data.status === 0) {
          this.banner = res.data.message;
        }
      });
    },
    
  }
};
</script>
<style lang="less" scoped>
.mui-card {
    font-size: 0px;
    position: relative;
    overflow: hidden;
    margin: 0px;
    border-radius: 0px;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
}
ul{
    width: 100%;
    padding: 0px;

    li{
        width: 45%;
        height: 255px;
        float: left;
        list-style: none;
        border: 2px solid rgb(210,210,210);
        margin: 5px;
        padding: 15px;

        img{
            width: 100%;
        }
    }
}
p {
    font-size: 1px;
    margin-top: 0;
    margin-bottom: 0px;
    color: #8f8f94;
}
span {
    font-size: 14px;
    color: rgb(200,50,40);
}
s {
    font-size: 14px;
    margin-right: 13px;
    color: rgb(210,210,210);
}
</style>