// src/store/store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Create Redux store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // Middleware for handling asynchronous actions
);

export default store;
