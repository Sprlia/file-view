<template>
  <div v-if="visible" style="z-index: 10000;">
    <div class="_file-view" @wheel="wheel">
      <component v-if="file_list.length > 0" :is="file_list[now_index]._file_view_ext" ref="file" :src="file_list[now_index]._file_view_src"></component>
      <i class="close iconfont iconclose" @click="$emit('updateVisible', false)"></i>
      <i class="left iconfont iconleft" @click="last"></i>
      <i class="right iconfont iconright" @click="next"></i>
    </div>
    <div class="_file-view_back" style></div>
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
    index: {
      type: Number,
      default: 0
    },
    files: Array,
    attr: String,
    filter: Function
  },
  data: function() {
    return {
      now_index: 0
    };
  },
  methods: {
    wheel(e) {
      if (this.$refs.file && this.$refs.file.wheel) {
        this.$refs.file.wheel(e);
      }
    },
    next() {
      if (this.now_index != this.file_list.length - 1) {
        this.now_index++;
      }
    },
    last() {
      if (this.now_index > 0) {
        this.now_index--;
      }
    },
    src_ext(item, index) {
      var src = "";
      if (this.attr && item[this.attr]) {
        src = item[this.attr];
      } else {
        src = item;
      }
      if (this.filter) {
        src = this.filter(src);
      }
      var ext = "";
      var fileName = src.lastIndexOf(".");
      let fileNameLength = src.length;
      let fileFormat = src.substring(fileName + 1, fileNameLength);
      if (file_ext[fileFormat]) {
        ext = file_ext[fileFormat];
      } else {
        return null;
      }

      return {
        _file_view_src: src,
        _file_view_index: index,
        _file_view_ext: ext
      };
    },
    set_now_index(arr) {
      const _this = this;
      let index_tmp = 0;
      let files = arr || this.file_list;
      //console.log("try reindex set_now_index", files)
      for (let i = 0; i < files.length; i++) {
        if (files[i]._file_view_index == _this.index) {
          _this.now_index = i;
          //console.log("set now_index found", _this.now_index);
          return;
        }
        //console.log(index_tmp, _this.index)
        if (files[i]._file_view_index < _this.index) {
          index_tmp = i;
        }
      }
      //console.log("set now_index not found", index_tmp, this.file_list);
      _this.now_index = index_tmp;
      return;
    }
  },
  watch: {
    index(n, o) {
      this.set_now_index();
    },
    file_list(n, o) {
      this.set_now_index();
    }
  },
  computed: {
    file_list() {
      var arr = [];
      const _this = this;
      for (let i = 0; i < _this.files.length; i++) {
        var item = _this.src_ext(_this.files[i], i);
        if (!item) continue;

        if (typeof _this.files[i] == "object") {
          arr.push(Object.assign({}, _this.files[i], item));
        } else {
          arr.push(item);
        }
      }
      return arr;
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
  z-index: 10000;
}

._file-view_back {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: #000;
  opacity: 0.3;
  z-index: 9999;
}

._file-view .close {
  position: absolute;
  top: 20px;
  right: 20px;
}

._file-view .iconclose {
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  display: none;
}

._file-view .left {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

._file-view .iconleft {
  font-size: 80px;
  height: 80px;
  cursor: pointer;
  color: #fff;
  display: none;
}

._file-view .right {
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}

._file-view .iconright {
  font-size: 80px;
  height: 80px;
  cursor: pointer;
  color: #fff;
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
