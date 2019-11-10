
import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//全局自己的全局样式
import './css/app.less'
//导入mint-ui
import MintUI from 'mint-ui'
import { Toast } from 'mint-ui'
Vue.prototype.toast = Toast;
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import mui from './lib/mui/js/mui.min.js'
Vue.prototype.mui = mui;
//导入axios
import axios from 'axios'
//设置公共的路径
axios.defaults.baseURL = "http://www.liulongbin.top:3005/";
Vue.prototype.$axios = axios;


//导入vue-preview
import VuePreview from 'vue-preview'

Vue.use(VuePreview);


//配置全局过滤器 : 格式化时间
import moment from 'moment'

Vue.filter('dateFormat', function (data, pattern = 'YYYY-MM-DD h:mm:ss') {
    // 1. 需要格式化的时间  2. 时间的格式
    return moment(data).format(pattern);
});




new Vue({
    el:'#app',
    render: c => c(App),
    router
});