<template>
  <div class="hello">
    <div class="app-panel">
      <button @click="changeGlobalState">修改globalState</button>
      <div class="global-state">
        <h3>[globalState] name:</h3>
        <span> {{ commonData }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    };
  },
  computed: {
    commonData() {
      return this.isQiankun ? this.$root.parentVuex.state.common.commonData : "";
    },
  },
  mounted() {},
  methods: {
    ...mapMutations({
      setGlobalState: "SET_GLOBAL_STATE",
    }),
    changeGlobalState() {
      if (this.isQiankun) {
        this.$root.parentVuex.commit("SET_COMMON_DATA", "app1-components-HelloWorld");
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
