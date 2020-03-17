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
              <Link to="/https://github.com/JMRosenberg12">Github</Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/jacob-rosenberg-606a99161/">Linkdin</Link>
            </li>
            <li>
              <Link to="https://jmrosenberg12.github.io/Jacob-Rosenberg-s-Portfolio/Rosenberg_Jacob_Resume.pdf">Resume</Link>
            </li>
          </ul>
        </nav>  
        </Router>
        </div>    
          </div>
        
        <Route>
        <Github path="https://github.com/JMRosenberg12">
            </Github>
            </Route>
          
          <Route>
          <Linkedin path="https://www.linkedin.com/in/jacob-rosenberg-606a99161/">
            </Linkedin>
            </Route>
         
          <Route>
          <Resume path="https://jmrosenberg12.github.io/Jacob-Rosenberg-s-Portfolio/Rosenberg_Jacob_Resume.pdf">
            </Resume>
            </Route>
        
   
  <Footer/>
    
      
    ); 
    }
    }

export default App;
