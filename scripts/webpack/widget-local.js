import BaseWidget from './widget-index';

class BaseWidgetApp {
  constructor(config) {
    this.config = config || {};
    this.init();
  }

  init() {
    console.log('local widget init');
    const { ...config } = this.config;
    new BaseWidget({
      ...config,
    });
  }
}

window.BaseWidgetApp = BaseWidgetApp;
// new BaseWidgetApp();

export default BaseWidgetApp;
