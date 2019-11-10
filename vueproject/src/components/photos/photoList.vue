<template>
    <div>
        <!--顶部滑动区域-->
        <div id="slider" class="mui-slider" data-slider="4">
            <div id="sliderSegmentedControl"
                 class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-scroll-wrapper">

                <div class="mui-scroll">
                    <!--这里放置真实显示的DOM内容-->
                    <a    v-for="item in cates" :key="item.id"
                          :class="['mui-control-item'  , item.id===0?'mui-active':'']"
                          @click="getPhotoListByCateId(item.id)">
                        {{ item.title}}
                    </a>


                </div>

            </div>
        </div>

        <!--图文列表-->
        <ul class="photo-list">
            <router-link :to="'/home/photoInfo/'+item.id"
                         tag="li"
                         v-for="item in photoList" :key="item.id">
                <!--懒加载-->
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    // import mui from '../../lib/mui/js/mui.min.js'
    //报错 : 可能严格模式下不能使用mui中的caller, arguments等属性
    //解决: 1. 改mui的源码  2. 把项目中的严格模式忽略掉 . 采用第二个
    //使用: 通过npm install babel-plugin-transform-remove-strict-mode 在.babelrc里面设置
    export default {
        name: "photoList",
        data() {
            return {
                cates: [],
                photoList: []
            }
        },
        created() {
            this.getAllCategory();
            this.getPhotoListByCateId(0);
        },
        mounted() {
            this.mui('.mui-scroll-wrapper').scroll();
        },
        methods: {
            //获取所有图片分类
            getAllCategory() {
                this.$axios.get('api/getimgcategory')
                    .then(res => {
                        res.data.message.unshift({title: '全部', id: 0});
                        this.cates = res.data.message
                    })
            },
            //根据id获取图文列表
            getPhotoListByCateId(cateId) {
                this.$axios.get('api/getimages/' + cateId)
                    .then(res => {
                        this.photoList = res.data.message
                    })
            }
        }

    }
</script>

<style scoped lang="scss">
    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;

        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;

            img {
                width: 100%;
                display: block;
            }
            /*设置懒加载图片样式*/
            img[lazy=loading]{
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;
                .info-title {
                    font-size: 14px;
                }
                .info-body {
                    font-size: 13px;
                }
            }

        }
        .mui-slider {
            position: fixed;
            z-index: 1111;
            overflow: hidden;
            width: 100%;
        }
    }


</style>