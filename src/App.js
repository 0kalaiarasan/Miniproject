// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import StockDetail from './components/StockDetail';
import StockList from './components/StockList';
import './styles/main.css'; // Include your main CSS file

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="app">
                    <Header />
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/stocks/:symbol" component={StockDetail} />
                            <Route path="/stocks" component={StockList} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default App;
