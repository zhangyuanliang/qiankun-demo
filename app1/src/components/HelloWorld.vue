<template>
  <div class="hello">
    <div class="app-panel">
      <button @click="changeGlobalState">修改globalState</button>
      <div class="global-state">
        <h3>[globalState] name:</h3>
        <span>{{ globalState.user }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
      globalState: ''
    };
  },
  mounted() {
    this.globalState = this.$actions.getGlobalState()
  },
  methods: {
    changeGlobalState() {
      if (this.isQiankun) {
        this.$setGlobalState({
          user: 'app1-components-HelloWorld'
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.global-state {
  display: flex;
  align-items: center;
  > span {
    margin-left: 10px;
  }
}
.app-panel {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
