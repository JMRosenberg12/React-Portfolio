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
              <Link to=".">Github</Link>
            </li>
            <li>
              <Link to=".">Linkdin</Link>
            </li>
            <li>
              <Link to=".">Resume</Link>
            </li>
          </ul>
        </nav>      
        </Router>
        <Route path=".">
            <About />
          </Route>
          <Route path=".">
            <Topics />
          </Route>
          <Route path=".">
            <Home />
            </Route>
      <Footer />
      </div>
      </div>
      
    );
    }}

export default App;
