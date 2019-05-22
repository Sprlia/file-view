<template>
  <video class="_file_content" :style="picStyle" :src="src" ref="video" :controls="controls">您的浏览器不支持此文件在线播放。</video>
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
      },
      controls: {}
    };
  },
  methods: {
    wheel(e) {
      if (e.deltaY > 0) {
        if (this.$refs.video.volume - 0.1 <= 0) {
          this.$refs.video.volume = 0;
        } else {
          this.$refs.video.volume = this.$refs.video.volume - 0.1;
        }
      }
      if (e.deltaY < 0) {
        if (this.$refs.video.volume + 0.1 >= 0) {
          this.$refs.video.volume = 1;
        } else {
          this.$refs.video.volume = this.$refs.video.volume + 0.1;
        }
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
