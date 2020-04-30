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
                    <div>Day Planner</div>
                    <div>I want to add important events to a daily planner, so that I can manage my time effectively.</div>
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Day-Planner/" role="button"> Link to Application</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Day-Planner" role="button">Github Repository to DP</a>
        
                </div>
                <div className="col-sm">
                    <img src={Password} alt="Password Generator" /> 
                    <div>Password Generator</div>
                    <div>The purpose is to help us users to create stronger passwords, so we can provide greater security for a given type of access.</div>
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Password-Generator/" role="button">Link to Application</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Password-Generator" role="button">Github Repository to PG</a>
                </div>
                <div className="col-sm">
                    <img src={Project1} alt="Project 1" />
                    <div>Project 1: Your Best Day Out Event Tracker</div>
                    <div>This application will assist users with planning a day out by generating options for local events and food, as well as weather conditions by date and location.</div>
                    <a className="btn btn-primary" href="https://andrelbarreto.github.io/ProjectOne/index.html" role="button">Link to Application</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/ProjectOne" role="button">Github Repository to ProjectOne</a>
                </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <img src={Burger} alt="Burger" />
                    <div>Burger App</div>
                    <div>Let's make some burgers! Create a logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).</div>
                    <a className="btn btn-primary" href="https://polar-fortress-86358.herokuapp.com" role="button">Link to Application</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/burger" role="button">Github Repository to Burger App</a>
                </div>
                <div className="col-sm">
                  <img src={NoteTaker} alt="Note Taker" />
                  <div>Note Taker</div>
                  <div>As a user, I want to be able to write, save, and delete notes, so I can organize my thoughts and keep track of tasks I need to complete.</div>
                  <a className="btn btn-primary" href="https://serene-dawn-05814.herokuapp.com/" role="button">Link to Application</a>
                  <a className="btn btn-success" href="https://github.com/JMRosenberg12/Note-Taker" role="button">Github Repoistory to Note Taker</a>
                </div>
                <div className="col-sm">
                  <img src={Project2} alt="Project 2" />
                  <div>Project 2: SpiderFly</div>
                  <div>This project is based on the version of a music playing app like Spotify or Itunes.</div>
                  <a className="btn btn-primary" href="https://spiderfly.herokuapp.com" role="button">Link to Application</a>
                  <a className="btn btn-success" href="https://github.com/icek567/Project-2" role="button">Github Repository to Project 2</a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                <img src={GoogleBooksSearch} alt="GoogleBooksSearch" />
                <div>Google Books Search</div>
                <div>This App requires to use React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches.</div>
              <a className="btn btn-primary" href="https://blooming-tor-30890.herokuapp.com" role="button">Link to Application</a>
              <a className="btn btn-success" href="https://github.com/JMRosenberg12/Google-Books-Search" role="button">Github Repository to Google Books Search</a>
                  </div>
              </div>
            </div>
            </React.Fragment>
          
     
         
                
    
        );
        
    }
    
}