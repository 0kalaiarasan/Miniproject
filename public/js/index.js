// public/js/index.js

// Function to initialize global event listeners
const initGlobalEventListeners = () => {
    // Add a global listener for search inputs if needed
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleGlobalSearch);
    }
};

// Example function to handle global search
const handleGlobalSearch = async (event) => {
    const searchTerm = event.target.value;
    // Perform search or filter stocks based on the input
    if (searchTerm) {
        try {
            const response = await fetch(`/api/stocks/search?query=${searchTerm}`);
            const stocks = await response.json();
            displaySearchResults(stocks); // A function to display the results
        } catch (error) {
            console.error('Error during global search:', error);
        }
    } else {
        // Clear the results if the input is empty
        clearSearchResults();
    }
};

// Function to clear search results
const clearSearchResults = () => {
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.innerHTML = ''; // Clear previous results
    }
};

// Function to initialize the application
const init = () => {
    initGlobalEventListeners();
};

// Call the init function when the window loads
window.onload = init;
