// src/components/Footer.js

import React from 'react';
import './footer.css'; // Import the footer-specific styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Stock Analysis. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
