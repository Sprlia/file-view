<template></template>

<script>
import Vue from "vue";
import viewMain from "./components/view";
export default {
  props: {
    files: Array,
    visible: Boolean
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