import React from 'react';
import './App.css';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';





function App() {
  return (

    <Router>
    <div className="App">
      <Nav/>
      
    <Route path="/home" component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    
    </div>
    </Router>
  );
}

export default App;
