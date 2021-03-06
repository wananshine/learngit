// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import store from './store'
import 'mint-ui/lib/style.css'
import './assets/css/animate.css'
import Mint from 'mint-ui';
Vue.use(Mint);

import router from './router'

import VueResource from 'vue-resource'

import bottom_nav from './components/BottomNav'
Vue.component('bottom-nav', bottom_nav);

import { Loadmore } from 'mint-ui';
Vue.component('mt-loadmore', Loadmore);


import { Swipe, SwipeItem } from 'mint-ui';

Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
