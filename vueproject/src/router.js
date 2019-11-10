import Vue from 'vue'
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter);

//导入对应的模板
import Home from './components/tabbar/home.vue'
import Member from './components/tabbar/member.vue'
import Cart from './components/tabbar/cart.vue'
import Search from './components/tabbar/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import shopList from './components/purchase/shopList.vue'
import  detail from './components/purchase/detail.vue'
import  moreList from './components/purchase/moreList.vue'
import comments from './components/purchase/comments.vue'

//创建路由对象, 把路由对象导出去
export default new VueRouter({
    //配置路由规则
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component: Home},
        {path:'/member', component: Member},
        {path:'/cart', component: Cart},
        {path:'/search', component: Search},
        {path:'/home/newsList', component: NewsList},
        {path:'/home/newsInfo/:id', component: NewsInfo},
        {path:'/home/photoList', component: PhotoList},
        {path:'/home/photoInfo/:id', component: PhotoInfo},
        {path:'/home/shopList',component:shopList},
        {path:'/home/detail',component:detail},
        {path:'/home/moreList',component:moreList},
        {path:'/home/comments',component:comments},
    ],
    //配置高亮显示
    linkActiveClass:'mui-active'
})

