<template>
  <div>
    <file-view :files="datas" :visible.sync="show" attr="path" :index="index" :filter="$options.filters.picUrl"></file-view>
    <button @click="add">添加</button> 
    <button @click="shows(1)">显示1</button>
    <button @click="shows(2)">显示2</button>
    <button @click="shows(3)">显示3</button>
    <button @click="shows(4)">显示4</button>
    <button @click="shows(5)">显示5</button>
    <button @click="shows(6)">显示6</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false,
      index: 0,
      datas: [
        {path:"https://wowodevimage.99rongle.com/pic/073c0a5e1b26a2d5f3939cf0d13a158e"},
        {path:"https://wowodevimage.99rongle.com/pic/admin/petfuwu.png"},
        {path:"https://wowodevimage.99rongle.com/pic/073c0a5e1b26a2d5f3939cf0d13a158e"},
        {path:"https://wowodevimage.99rongle.com/pic/073c0a5e1b26a2d5f3939cf0d13a158e"},
        {path:"https://wowodevimage.99rongle.com/pic/xuanzhong2.png"},
        {path:"https://wowodevimage.99rongle.com/pic/073c0a5e1b26a2d5f3939cf0d13a158e"},
        {path:"https://wowodevimage.99rongle.com/pic/pj.png"},
      ]
    };
  },
  methods: {
    shows(index) {
      this.index= index;
      this.show = true;
    },
    add() {
      this.datas.push("ww");
    }
  }
};
</script>

<style>
</style>
