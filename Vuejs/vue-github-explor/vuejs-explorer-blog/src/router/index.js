import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

import Hello from 'components/Hello'

Vue.use(Router)


const routes = [
	{
      path: '/',
      name: 'Hello',
      component: Hello
    }
]

export default new Router({
  mode: 'history',
  routes
})
