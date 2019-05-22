<template></template>

<script>
import Vue from "vue";
import viewMain from "./components/view";
import { log } from "util";
export default {
  props: {
    files: Array,
    visible: Boolean,
    attr: String,
    index: Number,
    filter: Function
  },
  data: function() {
    return {
      el: null
    };
  },
  methods: {
    updateVisible(n) {
      this.$emit("update:visible", n);
    },
    mount() {
      const _this = this;

      var Profile = Vue.extend(viewMain);
      this.el = new Profile({
        propsData: {
          visible: _this.visible,
          index: _this.index,
          files: _this.files,
          attr: _this.attr,
          filter: _this.filter
        }
      }).$mount();

      this.el.$on("updateVisible", _this.updateVisible);

      document.body.appendChild(this.el.$el);
    }
  },
  watch: {
    visible(n, o) {
      this.el.visible = n;
    },
    index(n, o) {
      this.el.index = n;
    },
    files(n, o) {
      this.el.files = n;
    },
    attr(n, o) {
      this.el.attr = n;
    },
    filter(n, o) {
      this.el.filter = n;
    }
  },
  created() {
    this.mount();
  }
};
</script>