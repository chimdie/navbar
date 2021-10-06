import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Report';
import Products from './pages/Product';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reports' component={Reports} />
          <Route exact path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;