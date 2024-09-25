// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'; // Include your main CSS file
import { Provider } from 'react-redux';
import store from './store/store';

// Create a root for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the Redux Provider
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
