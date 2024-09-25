// src/__tests__/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../utils/App';
import { BrowserRouter } from 'react-router-dom';

describe('App Component', () => {
    test('renders the homepage', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // Check if the header and navigation are rendered
        const headerElement = screen.getByText(/Welcome to Stock Analysis/i);
        expect(headerElement).toBeInTheDocument();

        // Check for navigation links (assuming you have these in your navbar)
        const aboutLink = screen.getByText(/About/i);
        expect(aboutLink).toBeInTheDocument();

        const contactLink = screen.getByText(/Contact/i);
        expect(contactLink).toBeInTheDocument();

        const loginLink = screen.getByText(/Login/i);
        expect(loginLink).toBeInTheDocument();

        const registerLink = screen.getByText(/Register/i);
        expect(registerLink).toBeInTheDocument();
    });

    test('navigates to the login page', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // Simulate clicking the login link
        const loginLink = screen.getByText(/Login/i);
        loginLink.click();

        // Check if the login form is rendered
        const loginFormElement = screen.getByLabelText(/Username/i);
        expect(loginFormElement).toBeInTheDocument();
    });
});
