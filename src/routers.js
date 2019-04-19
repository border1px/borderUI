import HomeView from './views/home.vue'
import ButtonView from './views/button.vue'
import ButtonGroupView from './views/button_group.vue'

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
  },
  {
    path: '/button_group',
    name: 'button_group',
    component: ButtonGroupView
  }
]
export default routers
