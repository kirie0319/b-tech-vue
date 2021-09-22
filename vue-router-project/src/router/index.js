import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'
import SubPage from '../views/SubPage.vue'
import ItemDetail from '../views/ItemDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sub-page',
    name: 'SubPage',
    component: SubPage
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/item-detail',
    name: 'ItemDetail',
    component: ItemDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.query.redirect) {
    next('/')
  } else {
    next()
  }
})

export default router