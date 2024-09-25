// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import './dashboard.css'; // Import the dashboard-specific styles

const Dashboard = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch stocks data on component mount
    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await fetch('/api/stocks'); // Adjust the API endpoint as necessary
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    // Render loading state or stocks
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h2 className="dashboard-title">Stock Dashboard</h2>
            <div className="stock-list">
                {stocks.length > 0 ? (
                    stocks.map((stock) => (
                        <div key={stock.symbol} className="stock-item">
                            <h3>{stock.name} ({stock.symbol})</h3>
                            <p>Price: ${stock.price}</p>
                            <p>Change: {stock.change} %</p>
                        </div>
                    ))
                ) : (
                    <p>No stocks available.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
