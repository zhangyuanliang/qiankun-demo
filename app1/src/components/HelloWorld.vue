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
import { mapState } from "vuex";
export default {
  computed: {
    // 通过global获取user的信息
    ...mapState('global', {
      name: state => state.name
    })
  },
  data() {
    return {};
  },
  mounted() {
    
  },
  methods: {
    changeGlobalState() {
      this.$store.commit('global/setGlobalState', { name: 'app1-components-HelloWorld' })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
