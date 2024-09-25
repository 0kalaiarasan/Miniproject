// src/components/StockDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StockDetail = () => {
    const { symbol } = useParams();
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStockDetail = async () => {
            try {
                const response = await fetch(`/api/stocks/${symbol}`);
                if (!response.ok) {
                    throw new Error('Stock not found');
                }
                const data = await response.json();
                setStockData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStockDetail();
    }, [symbol]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="stock-detail">
            <h2>{stockData.name} ({stockData.symbol})</h2>
            <p>Current Price: ${stockData.price}</p>
            <p>Market Cap: ${stockData.marketCap}</p>
            <p>52 Week High: ${stockData.high52Week}</p>
            <p>52 Week Low: ${stockData.low52Week}</p>
            <p>Description: {stockData.description}</p>
            <button onClick={() => window.history.back()}>Back to Stock List</button>
        </div>
    );
};

export default StockDetail;
