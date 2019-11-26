import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
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
      name: '/login',
      component: () => import('@/page/login'),
    }, {
      path: '/urlEncode',
      name: '/urlEncode',
      component: () => import('@/page/urlEncode'),
    }, {
      path: '/jsonEncode',
      name: '/jsonEncode',
      component: () => import('@/page/jsonEncode'),
    },
    /*文章相关路由*/
    {
      path: '/article',
      name: '/article',
      component: () => import('@/page/article/article'),
    },  {
      path: '/addArticle',
      name: '/addArticle',
      component: () => import('@/page/article/addArticle'),
      meta:{
        needLogin:true
      }
    }, {
      path: '/articleEdit',
      name: '/articleEdit',
      component: () => import('@/page/article/articleEdit'),
      meta:{
        needLogin:true
      }
    },
    /*计划相关路由*/
    {
      path: '/addproject',
      name: '/addproject',
      component: () => import('@/page/project/addproject'),
      meta:{
        needLogin:true
      }
    }, {
      path: '/editproject/:id+.html',
      name:'/editproject',
      component: () => import('@/page/project/editproject'),
      meta:{
        needLogin:true
      }
    }, {
      path: '/showproject',
      name: '/showproject',
      component: () => import('@/page/project/showproject'),
      meta:{
        needLogin:true
      }
    }, {
      path: '/editstatus/:id+.html',
      name: '/editstatus',
      component: () => import('@/page/project/editstatus'),
      meta:{
        needLogin:true
      }
    },
    /**/
    {
      path: '/addLightNovelContent',
      name: '/addLightNovelContent',
      component: () => import('@/page/lightnovel/addLightNovelContent'),
      meta:{
        needLogin:true
      }
    },{
      path: '/addLightNovelSerial',
      name: '/addLightNovelSerial',
      component: () => import('@/page/lightnovel/addLightNovelSerial'),
      meta:{
        needLogin:true
      }
    }, {
      path: '/findLightNovelContent',
      name: '/findLightNovelContent',
      component: () => import('@/page/lightnovel/findLightNovelContent'),
      meta:{
        needLogin:true
      }
    },

  ],

})

