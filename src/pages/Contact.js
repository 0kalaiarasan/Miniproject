// src/pages/Contact.js

import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setSuccess(true);
                setError('');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const data = await response.json();
                setError(data.message || 'An error occurred while sending your message.');
                setSuccess(false);
            }
        } catch (err) {
            console.error('Error submitting contact form:', err);
            setError('An error occurred. Please try again later.');
            setSuccess(false);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            {success && <p className="success-message">Your message has been sent successfully!</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="contact-form">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Your Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
