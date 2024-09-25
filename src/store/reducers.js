// src/store/reducers.js

import { 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    LOGOUT, 
    FETCH_STOCKS, 
    FETCH_STOCK_SUCCESS, 
    FETCH_STOCK_FAILURE 
} from './actions';

// Initial state
const initialState = {
    user: null,
    error: null,
    stocks: [],
    stockDetails: {},
    loading: false,
};

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                error: null,
            };
        case FETCH_STOCKS:
            return {
                ...state,
                stocks: action.payload,
                loading: false,
            };
        case FETCH_STOCK_SUCCESS:
            return {
                ...state,
                stockDetails: action.payload,
                loading: false,
            };
        case FETCH_STOCK_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default rootReducer;
