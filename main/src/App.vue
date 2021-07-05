<template>
  <div id="app">
    <div>
      <!-- 子应用 sub-vue -->
      <router-link to="/sub-vue/" class="tabs-item">sub-vue</router-link>
      <!-- 子应用 sub-purehtml -->
      <router-link to="/sub-purehtml/" class="tabs-item">sub-purehtml</router-link>
      <!-- 子应用 sub-react -->
      <router-link to="/sub-react/" class="tabs-item">sub-react</router-link>
      <!-- <span @click="toPurehtml">sub-purehtml</span> -->
    </div>
    <div class="main-panel">
      <button @click="changeGlobalState">main globalState</button>
      <div class="global-state">
        <h3>[globalState] name:</h3>
        <span> {{ globalState.user }}</span>
      </div>
    </div>
    <!-- 子应用容器 -->
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      globalState: {}
    }
  },
  mounted () {
    this.globalState = this.$actions.getGlobalState();
  },
  methods: {
    changeGlobalState() {
      this.$actions.setGlobalState({
        user: 'main-App.vue'
      })
    },
    toPurehtml() {
      const store = this.$store
      this.$router.push('/sub-purehtml')
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
