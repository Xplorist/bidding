import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const creatRouter = () => {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Main')
      },
      {
        path: '/personal',
        name: 'personal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/personal/Container'),
        children: [{
            path: '',
            name: 'main',
            component: () => import('@/views/personal/Main'),
          },
          {
            path: 'delivery',
            name: 'delivery',
            component: () => import('@/views/personal/Delivery'),
          },
          {
            path: 'evaluation',
            name: 'evaluation',
            component: () => import('@/views/personal/Evaluation'),
          },
          {
            path: 'information',
            name: 'information',
            component: () => import('@/views/personal/Information'),
          },
          {
            path: 'postEvaluation',
            name: 'postEvaluation',
            component: () => import('@/views/personal/PostEva'),
          },
          {
            path: 'payment',
            name: 'payment',
            component: () => import('@/views/personal/Payment'),
          },
          {
            path: 'setting',
            name: 'setting',
            component: () => import('@/views/personal/Setting')
          }
        ]
      },
      {
        path: '/particulars',
        name: 'particulars',
        component: () => import('@/views/particulars/Main')
      },
      {
        path: '/merchant',
        name: 'merchant',
        component: () => import('@/views/merchant/Container'),
        children: [{
            path: '',
            name: 'entryFir',
            component: () => import('@/views/merchant/EntryFir')
          },
          {
            path: 'entrySec',
            name: 'entrySec',
            component: () => import('@/views/merchant/EntrySec')
          },
          {
            path: 'information',
            name: 'information',
            component: () => import('@/views/merchant/Information')
          }
        ]
      },
      {
        path: '/contract',
        name: 'contract',
        component: () => import('@/views/contract/Main')
      },
      {
        path: '/demand',
        redirect: '/demand/order',
        name: 'demand',
        component: () => import('@/views/demand/Container'),
        children: [{
            path: 'order',
            name: 'main',
            component: () => import('@/views/demand/Main')
          },
          {
            path: 'information',
            name: 'informaiton',
            component: () => import('@/views/demand/Information')
          },
          {
            path: 'evaluation',
            name: 'evaluation',
            component: () => import('@/views/demand/Evaluation'),
          },
          {
            path: 'postEva',
            name: 'postEva',
            component: () => import('@/views/demand/PostEva')
          },
          {
            path: 'publish',
            name: 'publish',
            component: () => import('@/views/demand/Publish')
          },
          {
            path: 'chooseDetails',
            name: 'chooseDetails',
            component: () => import('@/views/demand/ChooseDetails')
          },
          {
            path: 'setting',
            name: 'setting',
            component: () => import('@/views/demand/Setting')
          }
        ]
      }
    ]
  })
}

const router = creatRouter()


// 導航守衛
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token')
  const nextRoute = ['/personal', '/demand']
  // console.log(to)
  var path = '/' + to.path.split('/')[1]
  if (nextRoute.indexOf(path) >= 0 && (!token || token == null)) {
    next({
      path: '/login',
    })
  } else {
    next()
  }
})

// 跳转后回到顶部
router.afterEach(() => {
  // to,from,next
  // window.scrollTo(0, 110)
})

export default router