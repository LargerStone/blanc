import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';

Vue.prototype.$layer = layer(Vue);
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(VueAxios,axios);
//每次路由切换前进行的方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
})

router.beforeEach((to,from,next)=>{
  var that = this
  //用来判断和控制登录和注销按钮的显示

  if(to.meta.needLogin){
    if(window.localStorage.token){
      next()
    }else{
      console.log('需登录')
      next('/Login')
    }
  }else{
    next()
  }

})
