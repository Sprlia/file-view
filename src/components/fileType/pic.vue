<template>
  <img class="_file_content" :style="picStyle" :src="src">
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
        height_scale: 1
      }
    };
  },
  methods: {
    mousedown(e) {
      console.log(e)
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
        height_scale: 1
      };
    }
  },
  computed: {
    picStyle() {
      return {
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
._file_content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
