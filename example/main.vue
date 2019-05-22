<template>
  <div>
    <file-view :files="datas" :visible.sync="show"></file-view>
    <button @click="add">添加</button>
    <button @click="show = true">显示</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false,
      datas: [
        "https://wowodevimage.99rongle.com/pic/073c0a5e1b26a2d5f3939cf0d13a158e.mp4",
        "https://wowodevimage.99rongle.com/pic/xuanzhong2.png",
        "https://wowodevimage.99rongle.com/pic/pj.png"
      ]
    };
  },
  methods: {
    add() {
      this.datas.push("ww");
    }
  }
};
</script>

<style>
</style>
