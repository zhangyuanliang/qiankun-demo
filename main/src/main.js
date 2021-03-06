import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入qiankun.js
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
import actions from "./globalState";

Vue.config.productionTip = false;
Vue.prototype.$actions = actions

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 注册子应用
registerMicroApps([
  {
    name: "sub-vue", // 子应用名称
    entry: process.env.VUE_APP_SUB_VUE, // 子应用入口
    container: "#subapp-viewport", // 子应用挂载的 div
    activeRule: "/sub-vue", // 子应用触发规则（路径）
    props: { actions, data: { store, router } },
  },
  {
    name: "sub-purehtml", // 子应用名称
    entry: process.env.VUE_APP_SUB_PUREHTML, // 子应用入口
    container: "#subapp-viewport", // 子应用挂载的 div
    activeRule: "/sub-purehtml", // 子应用触发规则（路径）
    props: { actions, data: { actions, store } },
  },
  {
    name: "sub-react", // 子应用名称
    entry: process.env.VUE_APP_SUB_REACT, // 子应用入口
    container: "#subapp-viewport", // 子应用挂载的 div
    activeRule: "/sub-react", // 子应用触发规则（路径）
    props: { actions, data: { actions, store } },
  },
]);

// 启动默认应用
setDefaultMountApp("/sub-vue");

// 开启服务
start();
