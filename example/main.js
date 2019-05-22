
import Vue from 'vue'
import main from './main.vue'

import fileView from "../src"
Vue.use(fileView, { width: 6, alwaysShow: true })

new Vue({
  el: '#app',
  render: h => h(main)
})
// create vue and mount




