import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import App from './components/App';

// const store = configureStore();
// const { reduxHistory } = store.getState();



class BaseWidget {
  constructor(config) {
    this.config = config || {};
    const { initialStore = {}, ...other } = this.config;
    // this.store = configureStore({ config: other, ...initialStore });
    this.store = configureStore({ ...initialStore });
    this.init();
  }

  
  init() {
    const { config, store } = this;
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('widget-app')
    );
  }
}

export default BaseWidget;
