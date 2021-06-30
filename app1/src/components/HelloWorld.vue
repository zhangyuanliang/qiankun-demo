<template>
  <div class="hello">
    <button @click="changeGlobalState">修改globalState</button>
    <div>
      <h3>[globalState] name:</h3>
      {{ name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { store } from "common";
export default {
  computed: {
    // 通过global获取user的信息
    ...mapState({
      name: state => state.global.name,
    }),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapActions({
      setGlobalState: "global/setGlobalState",
    }),
    changeGlobalState() {
      this.setGlobalState({ name: "app1-components-HelloWorld" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
