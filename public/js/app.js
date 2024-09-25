// // public/assets/app.js

// // Initialize the app and ensure everything is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("App is running...");

//     // Example: Fetch stock data from an API or backend
//     const fetchStockData = async () => {
//         try {
//             const response = await fetch('/api/stocks'); // Example API call
//             const data = await response.json();
//             co// public/js/app.js

//             // Function to handle user login
//             const handleLogin = async (event) => {
//                 event.preventDefault();
                
//                 const username = document.getElementById('username').value;
//                 const password = document.getElementById('password').value;
            
//                 try {
//                     const response = await fetch('/api/login', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({ username, password }),
//                     });
            
//                     const data = await response.json();
//                     if (response.ok) {
//                         // Redirect to dashboard or another page on successful login
//                         window.location.href = '/dashboard';
//                     } else {
//                         alert(data.message || 'Login failed');
//                     }
//                 } catch (error) {
//                     console.error('Error during login:', error);
//                     alert('An error occurred while logging in.');
//                 }
//             };
            
//             // Function to fetch stock data by symbol
//             const fetchStockData = async (symbol) => {
//                 try {
//                     const response = await fetch(`/api/stocks/${symbol}`);
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const data = await response.json();
//                     return data; // Returns stock data
//                 } catch (error) {
//                     console.error('Error fetching stock data:', error);
//                     throw error; // Propagate the error
//                 }
//             };
            
//             // Function to handle stock search
//             const searchStocks = async (event) => {
//                 event.preventDefault();
                
//                 const searchTerm = document.getElementById('search-input').value;
//                 try {
//                     const response = await fetch(`/api/stocks/search?query=${searchTerm}`);
//                     const stocks = await response.json();
                    
//                     // Update UI to display search results
//                     displaySearchResults(stocks);
//                 } catch (error) {
//                     console.error('Error searching stocks:', error);
//                 }
//             };
            
//             // Function to handle user logout
//             const handleLogout = async () => {
//                 try {
//                     await fetch('/api/logout', {
//                         method: 'POST',
//                     });
//                     // Redirect to login page
//                     window.location.href = '/login';
//                 } catch (error) {
//                     console.error('Error during logout:', error);
//                     alert('An error occurred while logging out.');
//                 }
//             };
            
//             // Function to display search results
//             const displaySearchResults = (stocks) => {
//                 const resultsContainer = document.getElementById('search-results');
//                 resultsContainer.innerHTML = ''; // Clear previous results
                
//                 stocks.forEach(stock => {
//                     const stockItem = document.createElement('div');
//                     stockItem.className = 'stock-item';
//                     stockItem.innerHTML = `<strong>${stock.name}</strong> (${stock.symbol}): ${stock.price}`;
//                     resultsContainer.appendChild(stockItem);
//                 });
//             };
            
//             // Initialize the application
//             const init = () => {
//                 const loginForm = document.getElementById('login-form');
//                 if (loginForm) {
//                     loginForm.addEventListener('submit', handleLogin);
//                 }
            
//                 const searchForm = document.getElementById('search-form');
//                 if (searchForm) {
//                     searchForm.addEventListener('submit', searchStocks);
//                 }
            
//                 const logoutButton = document.getElementById('logout-button');
//                 if (logoutButton) {
//                     logoutButton.addEventListener('click', handleLogout);
//                 }
            
//                 // Optionally fetch initial stock data on load
//                 fetchStockData('AAPL').then(data => {
//                     console.log('Fetched stock data:', data);
//                 });
//             };
            
//             // Call the init function when the window loads
//             window.onload = init;
//             nsole.log("Fetched Stock Data:", data);

//             // Update the DOM with the stock data
//             const stockContainer = document.getElementById('stock-container');
//             stockContainer.innerHTML = data.map(stock => `
//                 <div class="stock-item">
//                     <h2>${stock.name}</h2>
//                     <p>Current Price: ${stock.price}</p>
//                     <p>Prediction: ${stock.prediction}</p>
//                 </div>
//             `).join('');
//         } catch (error) {
//             console.error("Error fetching stock data:", error);
//         }
//     };

//     // Call the function to fetch and display stock data
//     fetchStockData();
// });












// public/assets/app.js

// Initialize the app and ensure everything is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("App is running...");

    // Mock stock data for demonstration
    const mockStockData = [
        { name: 'Apple Inc.', symbol: 'AAPL', price: 150.00, prediction: 'Buy' },
        { name: 'Tesla Inc.', symbol: 'TSLA', price: 700.00, prediction: 'Hold' },
        { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 3400.00, prediction: 'Sell' },
    ];

    // Function to display stock data
    const displayStockData = () => {
        const stockContainer = document.getElementById('stock-container');
        stockContainer.innerHTML = mockStockData.map(stock => `
            <div class="stock-item">
                <h2>${stock.name} (${stock.symbol})</h2>
                <p>Current Price: $${stock.price.toFixed(2)}</p>
                <p>Prediction: ${stock.prediction}</p>
            </div>
        `).join('');
    };

    // Function to handle user login (mocked)
    const handleLogin = async (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Mock login logic
        if (username === 'user' && password === 'password') {
            // Redirect to dashboard or another page on successful login
            window.location.href = '/dashboard';
        } else {
            alert('Login failed. Please check your username and password.');
        }
    };

    // Function to handle stock search (mocked)
    const searchStocks = (event) => {
        event.preventDefault();
        
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const filteredStocks = mockStockData.filter(stock => 
            stock.name.toLowerCase().includes(searchTerm) || 
            stock.symbol.toLowerCase().includes(searchTerm)
        );
        
        // Update UI to display search results
        displaySearchResults(filteredStocks);
    };

    // Function to display search results
    const displaySearchResults = (stocks) => {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Clear previous results
        
        stocks.forEach(stock => {
            const stockItem = document.createElement('div');
            stockItem.className = 'stock-item';
            stockItem.innerHTML = `<strong>${stock.name} (${stock.symbol}):</strong> $${stock.price.toFixed(2)}`;
            resultsContainer.appendChild(stockItem);
        });
    };

    // Initialize the application
    const init = () => {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }

        const searchForm = document.getElementById('search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', searchStocks);
        }

        // Display initial stock data
        displayStockData();
    };

    // Call the init function when the window loads
    window.onload = init;
});
