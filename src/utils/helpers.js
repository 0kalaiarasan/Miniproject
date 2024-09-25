// src/utils/helpers.js

// Function to format stock price with two decimal places
export const formatPrice = (price) => {
    return price.toFixed(2);
};

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Function to check if a user is authenticated
export const isAuthenticated = () => {
    // Here you can check if the user is authenticated
    // This can be done by checking if a token exists in local storage
    const token = localStorage.getItem('token');
    return !!token;
};

// Function to save token to local storage
export const saveToken = (token) => {
    localStorage.setItem('token', token);
};

// Function to remove token from local storage
export const removeToken = () => {
    localStorage.removeItem('token');
};

// Function to display a notification message
export const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;
    document.body.appendChild(notification);
    
    // Automatically remove notification after a few seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
};
