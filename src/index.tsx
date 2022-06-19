import React from 'react';

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import 'index.scss';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from 'App';
import reportWebVitals from 'reportWebVitals';
import { store } from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);

reportWebVitals();
