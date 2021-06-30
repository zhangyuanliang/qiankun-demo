<template>
  <div class="hello">
    <button @click="changeGlobalState">修改globalState</button>
    <div>
      <h3>[globalState] name:</h3>
      {{ commonData.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    };
  },
  computed: {
    commonData(){
      return this.isQiankun ? this.$root.parentVuex.state.app.commonData : '';
    }
  },
  mounted() {},
  methods: {
    changeGlobalState() {
      if(this.isQiankun){
        this.$root.parentVuex.commit('SET_COMMON_DATA', { name: "app1-components-HelloWorld" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
