<template>
  <img :style="picStyle" class="_pic_content" ref="picture" :src="src" @mousedown="mousedown">
</template>

<script>
export default {
  props: {
    src: String
  },
  data: function() {
    return {
      zoom: 0.5,
      style: {
        width_scale: 1,
        height_scale: 1,
        top: 0,
        left: 0
      }
    };
  },
  methods: {
    mousedown(e) {
      var origX = e.clientX;
      var origY = e.clientY;
      const _this = this;

      var doDrag = function(event) {
        event.preventDefault();
        var moveX = event.clientX - origX;
        var moveY = event.clientY - origY;
        origY = event.clientY;
        origX = event.clientX;
        _this.style.top += moveY;
        _this.style.left += moveX;
      };
      document.addEventListener("mousemove", doDrag);

      var stopDrag = function() {
        document.removeEventListener("mousemove", doDrag);
        document.removeEventListener("mouseup", stopDrag);
      };
      document.addEventListener("mouseup", stopDrag, false);
    },
    wheel(e) {
      if (e.deltaY > 0) {
        this.style.width_scale = this.style.width_scale * this.zoom;
        this.style.height_scale = this.style.height_scale * this.zoom;
      }
      if (e.deltaY < 0) {
        this.style.width_scale = this.style.width_scale * (1 + this.zoom);
        this.style.height_scale = this.style.height_scale * (1 + this.zoom);
      }
    }
  },
  watch: {
    src() {
      this.style = {
        width_scale: 1,
        height_scale: 1,
        top: 0,
        left: 0
      };
    }
  },
  computed: {
    picStyle() {
      return {
        top: this.style.top + "px",
        left: this.style.left + "px",
        "-webkit-transform":
          "scale(" +
          this.style.width_scale +
          ", " +
          this.style.height_scale +
          ")",
        transform:
          "scale(" +
          this.style.width_scale +
          ", " +
          this.style.height_scale +
          ")"
      };
    }
  }
};
</script>

<style>
._pic_content {
  position: relative;
}
</style>
