import BaseWidget from './widget-index';
import loadcss from 'loadcss';

GENERATION_TIME && loadcss([
  `./main.${GENERATION_TIME}.css`,
]);

class BaseWidgetApp {
  constructor(config) {
    this.config = config || {};
    this.init();
  }

  init() {
    const { ...config } = this.config;
    new BaseWidget({
      ...config,
    });
  }
}


window.BaseWidgetApp = BaseWidgetApp;

export default BaseWidgetApp;
