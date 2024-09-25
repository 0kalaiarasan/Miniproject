// src/store/actions.js

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const FETCH_STOCKS = 'FETCH_STOCKS';
export const FETCH_STOCK_SUCCESS = 'FETCH_STOCK_SUCCESS';
export const FETCH_STOCK_FAILURE = 'FETCH_STOCK_FAILURE';

// Action Creators

// Action to handle login success
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

// Action to handle login failure
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// Action to handle logout
export const logout = () => ({
    type: LOGOUT,
});

// Action to fetch stocks
export const fetchStocks = () => async (dispatch) => {
    try {
        const response = await fetch('/api/stocks');
        const data = await response.json();
        dispatch({ type: FETCH_STOCKS, payload: data });
    } catch (error) {
        console.error('Error fetching stocks:', error);
        dispatch({ type: FETCH_STOCK_FAILURE, payload: error });
    }
};

// Action to fetch stock details by symbol
export const fetchStockDetails = (symbol) => async (dispatch) => {
    try {
        const response = await fetch(`/api/stocks/${symbol}`);
        const data = await response.json();
        dispatch({ type: FETCH_STOCK_SUCCESS, payload: data });
    } catch (error) {
        console.error('Error fetching stock details:', error);
        dispatch({ type: FETCH_STOCK_FAILURE, payload: error });
    }
};
