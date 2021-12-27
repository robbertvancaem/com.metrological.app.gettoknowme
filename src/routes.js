import { About, Home } from './pages'

export default {
  root: 'home',
  routes: [
    {
      path: 'home',
      component: Home,
    },
    {
      path: 'about',
      component: About,
    },
  ],
}
