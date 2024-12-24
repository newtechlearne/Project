import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

// Create the root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your entire app with the Redux Provider and pass the store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
