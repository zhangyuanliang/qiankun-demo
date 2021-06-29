import store from './store'
console.log(process.env)
const microApps = [
  {
    name: "app1", // 子应用名称
    entry: process.env.VUE_APP_SUB_APP1, // 子应用入口
    activeRule: "/app1", // 子应用触发规则（路径）
  },
  {
    name: "app2", // 子应用名称
    entry: process.env.VUE_APP_SUB_APP2, // 子应用入口
    activeRule: "/app2", // 子应用触发规则（路径）
  },
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
