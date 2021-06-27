const render = $ => {
  $('#app2-container').html('Hello, render with jQuery');
  return Promise.resolve();
};

(global => {
  global['app2'] = {
    bootstrap: () => {
      console.log('app2 bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('app2 mount');
      return render($);
    },
    unmount: () => {
      console.log('app2 unmount');
      return Promise.resolve();
    },
  };
})(window);