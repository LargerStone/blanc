import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import urlEncode from '@/page/urlEncode'
import md from '@/page/md'
import login from '@/page/login'
import jsonEncode from '@/page/jsonEncode'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component: Index
    },{
      path: '/login',
      component: login
    }
    ,  {
      path: '/content/:id',
      component: Content
    }, {
      path: '/urlEncode',
      component: urlEncode,
      //meta:{
      //  needLogin:true
      //}
    }
    , {
      path: '/md',
      component: md
    }
    , {
      path: '/jsonEncode',
      component: jsonEncode,
      //meta:{
      //  needLogin:true
      //}
    }
  ],

})
