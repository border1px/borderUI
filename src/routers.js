import HomeView from './views/home.vue'
import ButtonView from './views/button.vue'
import ButtonGroupView from './views/button_group.vue'
import PickerView from './views/picker.vue'
import DemoView from './views/demo.vue'
import PageView from './views/page.vue'

const routers = [
  {
    path: '/demo',
    name: 'demo',
    component: DemoView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { index: 1 }
  },
  {
    path: '/button',
    name: 'button',
    component: ButtonView
  },
  {
    path: '/button_group',
    name: 'button_group',
    component: ButtonGroupView
  },
  {
    path: '/picker',
    name: 'picker',
    component: PickerView
  },
  {
    path: '/page',
    name: 'page',
    component: PageView
  }
]
export default routers
