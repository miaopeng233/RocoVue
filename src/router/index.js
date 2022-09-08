import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import top from '@/components/Top'
import Login from '@/views/Login.vue'
import MockTest from '@/views/MockTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      hidden: true,
      component: top,
      redirect: "/Home",
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/MockTest',
          name: 'MockTest',
          component: MockTest
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
