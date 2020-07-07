// import loadcss from 'loadcss';
// import '../src/scss/landrover.scss';

// APP_URL && GENERATION_TIME && loadcss([
//   `${APP_URL}landrover/main.${GENERATION_TIME}.css`,
// ]);

class BaseWidgetApp {
  constructor(config) {
    this.config = config || {};
    this.init();
  }

  init() {
    const { ...config } = this.config;
    import('../../src/').then(Module => {
      const BaseWidget = Module.default;
      new BaseWidget({
        ...config,
      });
    });
  }
}

export default BaseWidgetApp;