// src/components/Header.js

import React from 'react';
import './header.css'; // Import the header-specific styles

const Header = () => {
    return (
        <header className="header">
            <h1>Stock Analysis Dashboard</h1>
            <input type="text" id="global-search-input" placeholder="Search stocks..." />
        </header>
    );
};

export default Header;
