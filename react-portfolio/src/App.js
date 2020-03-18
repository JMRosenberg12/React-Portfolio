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
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/Contact">contact</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>  
        </Router>
        </div>    
          </div>
        
        <Route path = '/About'>
      <About />
            </Route>
          
          <Route path = '/Contact'> <Contact/>
        </Route>
         
          <Route path = '/Portfolio'> <Portfolio/>
          </Route>
        
   
  <Footer/>
    
      
    ); 
    }
    }

export default App;
