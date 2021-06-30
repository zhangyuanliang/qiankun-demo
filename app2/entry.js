const render = ({ data = {} , container } = {}) => {
  window.commonData = data
  return Promise.resolve();
};

(global => {
  global['app2'] = {
    bootstrap: () => {
      console.log('[app2 purehtml] bootstrap');
      return Promise.resolve();
    },
    mount: (props) => {
      console.log('[app2 purehtml] props from main framework', props);
      // global.$onGlobalStateChange = props.onGlobalStateChange
      // window.$setGlobalState = props.setGlobalState
      return render(props);
    },
    unmount: () => {
      console.log('app2 unmount');
      return Promise.resolve();
    },
  };
})(window);