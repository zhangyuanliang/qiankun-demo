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
    entry: "//localhost:8001", // 子应用入口
    container: "#app1-container", // 子应用所在容器
    activeRule: "/app1", // 子应用触发规则（路径）
  },
  {
    name: "app2", // 子应用名称
    entry: "//localhost:8002", // 子应用入口
    container: "#app2-container", // 子应用所在容器
    activeRule: "/app2", // 子应用触发规则（路径）
  },
]);

// 启动默认应用
setDefaultMountApp("/app1");

// 开启服务
start();
