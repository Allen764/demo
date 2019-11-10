<template>
     <div>
        <!--参考mui中图文列表-->
        <ul class="mui-table-view">
            <li v-for="(item, i) in newsList" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p>
                            <span>发表时间: {{item.add_time | dateFormat('YYYY-MM-DD') }}</span>
                            <span>点击次数: {{ item.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>


    export default {
        name: "newsList",
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                this.$axios.get('api/getnewslist')
                    .then(res => {
                        if (res.data.status === 0) {
                            this.newsList = res.data.message;
                        }
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    .mui-media-body {
        h3 {
            font-size: 14px;
        }
        p {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            color: #226aff;
        }
    }
</style>