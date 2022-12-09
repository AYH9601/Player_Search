import { Provider } from 'react-redux';
import store from "./store.js";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/GlobalStyle';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle></GlobalStyle>
    </Provider>
  </React.StrictMode>
);