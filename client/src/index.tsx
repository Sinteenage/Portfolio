import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const selector = 'root';

const root = ReactDOM.createRoot(
  document.getElementById(selector) as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

const el = document.getElementById(selector);

if (el !== null) {
    root.unmount();
}
