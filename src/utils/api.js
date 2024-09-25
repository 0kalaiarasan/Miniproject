// src/utils/api.js

// Base URL for the API
const BASE_URL = 'http://localhost:5000'; // Change this to your backend URL if different

// Function to handle user login
export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Function to handle user registration
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Function to fetch stock data by symbol
export const fetchStockData = async (symbol) => {
    try {
        const response = await fetch(`${BASE_URL}/api/stocks/${symbol}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
};

// Function to search for stocks based on a query
export const searchStocks = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/api/stocks/search?query=${query}`);
        return await response.json();
    } catch (error) {
        console.error('Error searching stocks:', error);
        throw error;
    }
};

// Function to logout user
export const logoutUser = async () => {
    try {
        await fetch(`${BASE_URL}/api/logout`, {
            method: 'POST',
        });
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};
