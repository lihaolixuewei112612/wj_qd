import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '../components/Home'
import LibraryIndex from '../components/library/LibraryIndex'
import NoteBook from '../components/notebook/notebook'
import Admin from '../components/admin/Admin'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/jotter',
          name: 'NoteBook',
          component: NoteBook,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin',
          name: 'Admin',
          component: Admin,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
