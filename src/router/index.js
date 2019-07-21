import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import urlEncode from '@/page/urlEncode'
import md from '@/page/md'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }, {
      path: '/urlEncode',
      component: urlEncode
    }
    , {
      path: '/md',
      component: md
    }
  ],

})
