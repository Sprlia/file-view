<template></template>

<script>
import Vue from "vue";
import viewMain from "./components/view";
export default {
  props: {
    files: Array,
    visible: Boolean,
    attr: String
  },
  data: function() {
    return {
      firstName: "Walter"
    };
  },
  methods: {
    updateVisible(n) {
      console.log(n)
      this.$emit("update:visible", n);
    },
    mount() {
      const _this = this;
      var Profile = Vue.extend({
        render(h) {
          return (
            <viewMain
              onUpdateVisible={_this.updateVisible}
              visible={_this.visible}
              files={_this.files}
              attr={_this.attr}
            />
          );
        }
      });

      var s = new Profile().$mount();
      document.body.appendChild(s.$el);
    }
  },
  watch: {
    visible(n, o) {
      this.$emit("update:visible", n);
    }
  },
  created() {
    this.mount();
  }
};
</script>