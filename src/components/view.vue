<template>
  <div class="_file-view" v-show="visible" @wheel="wheel">
    <component :is="file_ext" ref="file" :src="files[index]"></component>
    <i class="close iconfont iconclose" @click="$emit('updateVisible', false)"></i>
    <i class="left iconfont iconleft" @click="last"></i>
    <i class="right iconfont iconright" @click="next"></i>
  </div>
</template>

<script>
import file_ext from "../file-ext";

import picCom from "./fileType/pic";
import videoCom from "./fileType/video";
export default {
  components: {
    picCom,
    videoCom
  },
  props: {
    visible: Boolean,
    files: Array
  },
  data: function() {
    return {
      index: 0
    };
  },
  methods: {
    wheel(e) {
      if (this.$refs.file.wheel) {
        this.$refs.file.wheel(e);
      }
    },
    next() {
      if (this.index != this.files.length - 1) {
        this.index++;
      }
    },
    last() {
      if (this.index > 0) {
        this.index--;
      }
    }
  },
  watch: {},
  computed: {
    file_ext() {
      var fileName = this.files[this.index].lastIndexOf(".");
      let fileNameLength = this.files[this.index].length;
      let fileFormat = this.files[this.index].substring(
        fileName + 1,
        fileNameLength
      );
      return file_ext[fileFormat];
    }
  },
  created() {}
};
</script>

<style>
@import "//at.alicdn.com/t/font_1205441_w4fnyyfe2oo.css";

._file-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

._file-view .close {
  position: absolute;
  top: 20px;
  right: 20px;
}

.iconclose {
  font-size: 30px;
  cursor: pointer;
  color: #b5b0b0;
  display: none;
}

._file-view .left {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

.iconleft {
  font-size: 80px;
  height: 80px;
  cursor: pointer;
  color: #b5b0b0;
  display: none;
}

._file-view .right {
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

.iconright {
  font-size: 80px;
  height: 80px;
  cursor: pointer;
  color: #b5b0b0;
  display: none;
}

._file-view:hover .iconclose {
  display: block;
}
._file-view:hover .iconleft {
  display: block;
}
._file-view:hover .iconright {
  display: block;
}
</style>
