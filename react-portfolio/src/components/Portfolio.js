import React, { Component } from 'react';
import Scheduler from './images/WDScheduler.png'
import Password from './images/PasswordGenerator.png'
import Project1 from "./images/Project1.png"
import Burger from "./images/Burger.png"
import NoteTaker from "./images/NoteTaker.png"
import Project2 from "./images/Project2.png"
export default class Porfolio extends Component {
  render() {
   
    return (
   <React.Fragment>
      <div class="container">
          <header>
                  Portfolio
              </header>
              <div className="row">
                <div className="col-sm">
                    <img src={Scheduler} alt="Work Day Scheduler"> </img>
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Day-Planner/" role="button">Day Planner</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Day-Planner" role="button">Github Repository to DP</a>
        
                </div>
                <div className="col-sm">
                    <img className={Password} alt="Password Generator"> </img>
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Password-Generator/" role="button">Password Generator</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Password-Generator" role="button">Github Repository to PG</a>
                </div>
                <div className="col-sm">
                    <img className={Project1} alt="Project 1"> </img>
                    <a className="btn btn-primary" href="https://andrelbarreto.github.io/ProjectOne/index.html" role="button">Project 1</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/ProjectOne" role="button">Github Repository to ProjectOne</a>
                </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <img className={Burger} alt="Burger"> </img>
                    <a className="btn btn-primary" href="https://polar-fortress-86358.herokuapp.com" role="button">Burger App</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/burger" role="button">Github Repository to Burger App</a>
                </div>
                <div className="col-sm">
                  <img className={NoteTaker} alt="Note Taker"> </img>
                  <a className="btn btn-primary" href="https://serene-dawn-05814.herokuapp.com/" role="button">Note Taker</a>
                  <a className="btn btn-success" href="https://github.com/JMRosenberg12/Note-Taker" role="button">Github Repoistory to Note Taker</a>
                </div>
                <div className="col-sm">
                  <img className={Project2} alt="Project 2"></img>
                  <a className="btn btn-primary" href="https://spiderfly.herokuapp.com" role="button">Project 2</a>
                  <a className="btn btn-success" href="https://github.com/icek567/Project-2" role="button">Github Repository to Project 2</a>
                </div>
              </div>
            </div>
            </React.Fragment>
          
        
        
                
    
        );
    }
  } 