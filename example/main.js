
import Vue from 'vue'
import main from './main.vue'

import fileView from "../src"
Vue.use(fileView, { width: 6, alwaysShow: true })

Vue.filter('picUrl', function (path, tb, where) {
return path
})

new Vue({
  el: '#app',
  render: h => h(main)
})
// create vue and mount




