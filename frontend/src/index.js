import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

// Get the root DOM node
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
