import Vue from 'vue';
import app from  './App.vue';

//mui样式
import './lib/mui/css/mui.min.css'
//mint-ui组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header);
var vm =  new Vue({
    el:"#app",
    render(c) {
        return c(app);
    }
})


