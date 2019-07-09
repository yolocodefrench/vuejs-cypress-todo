import Vue from 'vue';
import Unicon from 'vue-unicons';
import { uniConstructor, uniTimes } from 'vue-unicons/src/icons';
import App from './App.vue'
import store from './store'
import './registerServiceWorker'



import '../node_modules/reset-css/reset.css';

import '@/scss/index.scss';
Vue.config.productionTip = false

Unicon.add([uniConstructor, uniTimes])
Vue.use(Unicon)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
