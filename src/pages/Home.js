// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import StockList from '../components/StockList';

const Home = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        // Fetch stock data when the component mounts
        const fetchStocks = async () => {
            try {
                const response = await fetch('/api/stocks');
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                console.error('Error fetching stock data:', error);
            }
        };

        fetchStocks();
    }, []);

    return (
        <div className="home-container">
            <h1>Welcome to Stock Analysis</h1>
            <p>Your one-stop platform for stock insights and recommendations.</p>
            <h2>Latest Stocks</h2>
            <StockList stocks={stocks} />
        </div>
    );
};

export default Home;
