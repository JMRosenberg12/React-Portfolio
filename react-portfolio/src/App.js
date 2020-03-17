import React, { Component } from 'react';
import logo from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return(
      <div className="App">
	
			<Header logo={logo} />
      
      <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to=".">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        </Router>
      <Footer />
      </div>
      </div>
    );
    }}

export default App;
