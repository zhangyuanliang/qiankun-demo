const render = ({ data = {} } = {}) => {
  // sessionStorage.setItem('globalState', JSON.stringify(data))
  return Promise.resolve();
};

(global => {
  global['sub-purehtml'] = {
    bootstrap: () => {
      console.log('[sub-purehtml] bootstrap');
      return Promise.resolve();
    },
    mount: (props) => {
      console.log('[sub-purehtml] props from main framework', props);
      // global.$onGlobalStateChange = props.onGlobalStateChange
      // window.$setGlobalState = props.setGlobalState
      // window.$store = props.data.store
      return render(props);
    },
    unmount: () => {
      console.log('sub-purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
