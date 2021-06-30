import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 导入qiankun.js
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 注册子应用
registerMicroApps([
  {
    name: "app1", // 子应用名称
    entry: process.env.VUE_APP_SUB_APP1, // 子应用入口
    container: '#subapp-viewport', // 子应用挂载的 div
    activeRule: "/app1", // 子应用触发规则（路径）
    props: { data : { store, router } }
  },
  {
    name: "app2", // 子应用名称
    entry: process.env.VUE_APP_SUB_APP2, // 子应用入口
    container: '#subapp-viewport', // 子应用挂载的 div
    activeRule: "/app2", // 子应用触发规则（路径）
    props: { data : { store, router } }
  },
]);

// 启动默认应用
setDefaultMountApp("/app1");

// 开启服务
start();
