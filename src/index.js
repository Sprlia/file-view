import fileView from './main.vue'

export default {
  install: function (Vue, config) {
    Vue.prototype.$SPFILEVIEW = config ||{}
    Vue.component('fileView', fileView)
  }
}

