<template>
  <div class="home">
    <h1>异步渲染</h1>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "默认"
    };
  },
  mounted() {
    this.name = "我是第一次页面渲染";
    this.name = "我是第二次页面渲染";
    const st = Date.now();
    while (Date.now() - st < 3000) {}
  }
};
</script>
