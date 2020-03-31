import React, { Component } from 'react';
import Scheduler from './images/WDScheduler.png'
import Password from './images/PasswordGenerator.png'
import Project1 from './images/Project1.png'
import Burger from './images/Burger.png'
import NoteTaker from './images/NoteTaker.png'
import Project2 from './images/Project2.png'
import GoogleBooksSearch from './images/GoogleBooksSearch.png'
import './css/portfolio.css'
export default class Porfolio extends Component {
  render() {
   
  
    return (
      
   <React.Fragment>
      <div className="container">
     
          <header>
                  Portfolio
              </header>
              <div className="row">
                <div className="col-sm">
                    <img src={Scheduler} alt="Work Day Scheduler"/> 
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Day-Planner/" role="button">Day Planner</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Day-Planner" role="button">Github Repository to DP</a>
        
                </div>
                <div className="col-sm">
                    <img src={Password} alt="Password Generator" /> 
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Password-Generator/" role="button">Password Generator</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Password-Generator" role="button">Github Repository to PG</a>
                </div>
                <div className="col-sm">
                    <img src={Project1} alt="Project 1" />
                    <a className="btn btn-primary" href="https://andrelbarreto.github.io/ProjectOne/index.html" role="button">Project 1</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/ProjectOne" role="button">Github Repository to ProjectOne</a>
                </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <img src={Burger} alt="Burger" />
                    <a className="btn btn-primary" href="https://polar-fortress-86358.herokuapp.com" role="button">Burger App</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/burger" role="button">Github Repository to Burger App</a>
                </div>
                <div className="col-sm">
                  <img src={NoteTaker} alt="Note Taker" />
                  <a className="btn btn-primary" href="https://serene-dawn-05814.herokuapp.com/" role="button">Note Taker</a>
                  <a className="btn btn-success" href="https://github.com/JMRosenberg12/Note-Taker" role="button">Github Repoistory to Note Taker</a>
                </div>
                <div className="col-sm">
                  <img src={Project2} alt="Project 2" />
                  <a className="btn btn-primary" href="https://spiderfly.herokuapp.com" role="button">Project 2</a>
                  <a className="btn btn-success" href="https://github.com/icek567/Project-2" role="button">Github Repository to Project 2</a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                <img src={GoogleBooksSearch} alt="GoogleBooksSearch" />
              <a className="btn btn-primary" href="https://blooming-tor-30890.herokuapp.com" role="button">Google Books Search</a>
                  <a className="btn btn-success" href="https://github.com/JMRosenberg12/Google-Books-Search" role="button">Github Repository to Google Books Search</a>
                  </div>
              </div>
            </div>
            </React.Fragment>
          
     
         
                
    
        );
        
    }
    
}