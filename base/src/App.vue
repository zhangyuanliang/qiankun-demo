<template>
  <div id="app">
    <div>
      <!-- 子应用 vue app1 -->
      <a href="/app1" class="tabs-item">app1: vue</a>
      <!-- 子应用 purehtml app2 -->
      <a href="/app2" class="tabs-item">app2: purehtml</a>
    </div>
    <!-- 子应用容器 -->
    <div id="app1-container"></div>
    <!-- 子应用容器 -->
    <div id="app2-container"></div>
  </div>
</template>

<script>
export default {
  methods: {
    
  },
};
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tabs-item {
  padding: 0 20px;
}
</style>
