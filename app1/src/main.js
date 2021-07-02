import './public-path';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null;

function render({ data = {} , container } = {}) {
  instance = new Vue({
    router,
    store,
    data(){
      return {
        parentRouter: data.router,
        parentVuex: data.store,
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行时，也注册一个名为global的store module
  render();
}

// 生命周期
export async function bootstrap() {
  console.log('[app1 vue] bootstraped');
}

export async function mount(props) {
  console.log('[app1 vue] props from main framework', props);
  
  // props.onGlobalStateChange((value, prev) => {
  //   if (value.name !== prev.name) {
  //     store.commit('SET_GLOBAL_STATE', value)
  //   }
  // });
  // Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  // Vue.prototype.$setGlobalState = props.setGlobalState;
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}