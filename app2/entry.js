const render = $ => {
  $('#app2-container').html('Hello, render with jQuery');
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
      props.onGlobalStateChange((value, prev) => {
        if (value.name !== prev.name) {
          window.componentName = value.name
        }
      });
      global.$onGlobalStateChange = props.onGlobalStateChange
      global.$setGlobalState = props.setGlobalState
      return render($);
    },
    unmount: () => {
      console.log('app2 unmount');
      return Promise.resolve();
    },
  };
})(window);