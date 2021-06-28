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
  data() {
    return {};
  },
  computed: {
    ...mapState({
      name: state => {
        return state.app.name
      },
    }),
  },
  mounted() {
    
  },
  methods: {
    changeGlobalState() {
      this.$setGlobalState({
        name: "app1-components-HelloWorld",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
