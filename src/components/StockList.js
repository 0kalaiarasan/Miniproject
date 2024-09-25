// src/components/StockList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StockList = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await fetch('/api/stocks');
                if (!response.ok) {
                    throw new Error('Failed to fetch stocks');
                }
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    if (loading) {
        return <p>Loading stocks...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="stock-list">
            <h2>Stock List</h2>
            {stocks.length === 0 ? (
                <p>No stocks available.</p>
            ) : (
                <div className="stock-items">
                    {stocks.map(stock => (
                        <div key={stock.symbol} className="stock-item">
                            <Link to={`/stocks/${stock.symbol}`}>
                                <h3>{stock.name} ({stock.symbol})</h3>
                                <p>Current Price: ${stock.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StockList;
