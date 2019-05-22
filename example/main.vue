<template>
  <div>
    <file-view :files="datas" :visible.sync="show" attr="path"></file-view>
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
        {path:"https://wowodevimage.99rongle.com/pic/073c0a5e1b26a2d5f3939cf0d13a158e.mp4"},
        {path:"https://wowodevimage.99rongle.com/pic/xuanzhong2.png"},
        {path:"https://wowodevimage.99rongle.com/pic/pj.png"},
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
