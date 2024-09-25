// src/components/Login.js

import React from 'react';
import './login.css'; // Import the login-specific styles

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form id="login-form">
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
