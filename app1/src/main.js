import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { store as commonStore } from 'common'

Vue.config.productionTip = false

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// webpack打包公共文件路径
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行时，也注册一个名为global的store module
  commonStore.globalRegister(store)
  render();
}

// 生命周期
export async function bootstrap() {
  console.log('[app1 vue] bootstraped');
}

export async function mount(props) {
  console.log('[app1 vue] props from main framework', props);
  console.log(props.getGlobalState())
  store.commit('SET_GLOBAL_STATE', props.getGlobalState())
  
  commonStore.globalRegister(store, props)
  // props.onGlobalStateChange((value, prev) => {
  //   if (value.name !== prev.name) {
  //     store.commit('SET_GLOBAL_STATE', value)
  //   }
  // });
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}