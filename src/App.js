import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import YourAccount from './YourAccount';
import Footer from './Footer';

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Header />
            <YourAccount />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
