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


import addproject from '@/page/project/addproject'
import editproject from '@/page/project/editproject'
import showproject from '@/page/project/showproject'
import editstatus from '@/page/project/editstatus'

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
      component: login
    }
    ,  {
      path: '/content',
      name: '/content',
      component: Content
    }, {
      path: '/urlEncode',
      name: '/urlEncode',
      component: urlEncode,
      //meta:{
      //  needLogin:true
      //}
    }
    , {
      path: '/article',
      name: '/article',
      component: article
    }
    , {
      path: '/jsonEncode',
      name: '/jsonEncode',
      component: jsonEncode,
      //meta:{
      //  needLogin:true
      //}
    }, {
      path: '/addArticle',
      name: '/addArticle',
      component: addArticle,
      meta:{
        needLogin:true
      }
    }, {
      path: '/articleEdit',
      name: '/articleEdit',
      component: articleEdit,
      meta:{
        needLogin:true
      }
    }, {
      path: '/addproject',
      name: '/addproject',
      component: addproject,
      meta:{
        needLogin:true
      }
    }, {
      path: '/editproject/:id+.html',
      name:'/editproject',
      component: editproject,
      meta:{
        needLogin:true
      }
    }, {
      path: '/showproject',
      name: '/showproject',
      component: showproject,
      meta:{
        needLogin:true
      }
    }, {
      path: '/editstatus/:id+.html',
      name: '/editstatus',
      component: editstatus,
      meta:{
        needLogin:true
      }
    }

  ],

})

