const render = $ => {
  $('#app2-container').html('Hello, render with jQuery');
  return Promise.resolve();
};

(global => {
  global['app2'] = {
    bootstrap: () => {
      console.log('[app2 purehtml] bootstrap');
      window.globalState = ''
      return Promise.resolve();
    },
    mount: (props) => {
      console.log('[app2 purehtml] props from main framework', props);
      window.globalState = props.getGlobalState();
      document.querySelector('#globalState').innerHTML = window.globalState.name
      props.onGlobalStateChange((value, prev) => {
        if (value.name !== prev.name) {
          window.globalState = value
        }
      });
      // global.$onGlobalStateChange = props.onGlobalStateChange
      window.$setGlobalState = props.setGlobalState
      return render($);
    },
    unmount: () => {
      console.log('app2 unmount');
      return Promise.resolve();
    },
  };
})(window);