import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      // <div>

      //   <Home/>
      // </div>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Resturant_app/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
