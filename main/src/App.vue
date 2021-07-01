<template>
  <div id="app">
    <div>
      <!-- 子应用 vue app1 -->
      <router-link to="/app1/" class="tabs-item">app1: vue</router-link>
      <!-- 子应用 purehtml app2 -->
      <router-link to="/app2/" class="tabs-item">app2: purehtml</router-link>
      <!-- <span @click="toApp2">app2: purehtml</span> -->
    </div>
    <div class="main-panel">
      <button @click="changeGlobalState">修改globalState</button>
      <div class="global-state">
        <h3>[globalState] name:</h3>
        <span> {{ commonData }}</span>
      </div>
    </div>
    <!-- 子应用容器 -->
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      commonData: (state) => state.common.commonData,
    }),
  },
  methods: {
    ...mapMutations({
      setCommonData: "SET_COMMON_DATA",
    }),
    changeGlobalState() {
      this.setCommonData("main-App.vue");
    },
    toApp2() {
      const store = this.$store
      this.$router.push('/app2')
      // loadMicroApp({
      //   name: "app2", // 子应用名称
      //   entry: process.env.VUE_APP_SUB_APP2, // 子应用入口
      //   container: '#subapp-viewport', // 子应用挂载的 div
      //   activeRule: "/app2", // 子应用触发规则（路径）
      //   props: { data : { store } }
      // });
    },
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
.global-state {
  display: flex;
  align-items: center;
  > span {
    margin-left: 10px;
  }
}
.main-panel {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
