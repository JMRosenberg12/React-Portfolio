import React, { Component } from 'react';
import logo from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/aboutme';
import Contact from './components/contact';
import Portfolio from './components/portfolio'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
    return(
      <React.Fragment>
      <div className="App">
	
			<Header logo={logo} />
      
      <div>
    
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav> 
        
        
        <Route path = '/aboutme'>
      <About />
            </Route>
          
          <Route path = '/contact'> <Contact/>
        </Route>
         
          <Route path = '/portfolio'> <Portfolio/>
          </Route>
          </Router>
          <Footer/>
          </div>    
          </div>
          </React.Fragment>
    );
  }
}
  
    

 
  
  export default App;

        
   
 
