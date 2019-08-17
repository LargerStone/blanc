import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import urlEncode from '@/page/urlEncode'
import article from '@/page/article/article'
import login from '@/page/login'
import jsonEncode from '@/page/jsonEncode'
import addArticle from '@/page/article/addArticle'
import articleEdit from '@/page/article/articleEdit'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component: Index,
      meta:{
        keepAlive:true
      }
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
      path: '/article',
      component: article
    }
    , {
      path: '/jsonEncode',
      component: jsonEncode,
      //meta:{
      //  needLogin:true
      //}
    }, {
      path: '/addArticle',
      component: addArticle,
      meta:{
        needLogin:true
      }
    }, {
      path: '/articleEdit',
      component: articleEdit,
      meta:{
        needLogin:true
      }
    }
  ],

})
