import HomeView from './views/home.vue'
import ButtonView from './views/button.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { index: 1 }
  },
  {
    path: '/button',
    name: 'button',
    component: ButtonView,
    meta: { index: 2 }
  }
]
export default routers
