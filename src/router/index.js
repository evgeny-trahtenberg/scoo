import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Scooters from '../views/project/scooters/Scooters.vue'
import List from '../views/project/scooters/List.vue'
import Maps from '../views/project/scooters/Maps.vue'
import Typography from '../views/styleguide/Typography.vue'
import Colors from '../views/styleguide/Colors.vue'
import Icons from '../views/styleguide/Icons.vue'
import Buttons from '../views/styleguide/Buttons.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/scooters/:id',
    component: () => import('../views/project/scooters/Scooters.vue'),
      children: [
        {
          // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет показан UserProfile
          path: 'list',
          component: List
        },
        {
          // при совпадении пути с шаблоном /user/:id/posts
          // в <router-view> компонента User будет показан UserPosts
          path: 'maps',
          component: Maps
        }
      ]
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/styleguide/colors',
    name: 'Colors',
    component: () => import('../views/styleguide/Colors.vue')
  },
  {
    path: '/styleguide/icons',
    name: 'Icons',
    component: () => import('../views/styleguide/Icons.vue')
  },
  {
    path: '/styleguide/typography',
    name: 'Typography',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/styleguide/Typography.vue')
  },
  {
    path: '/styleguide/buttons',
    name: 'Buttons',
    component: () => import('../views/styleguide/Buttons.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
