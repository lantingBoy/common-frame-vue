/* import Vue from 'vue'
import Router from 'vue-router' */



Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: '/',
      component: resolve => require(['@/pages/layout/layout.vue'], resolve),
      redirect: '/home',
      children: [{ //首页
        name: 'home',
        path: '/home',
        component: resolve => require(['@/pages/index/'], resolve),
        meta: {
          name: '主页',
          hideHeader: true,
          htmlBg: {
            'background': '#fff'
          }
        }
      }]
    }

  ]
})
