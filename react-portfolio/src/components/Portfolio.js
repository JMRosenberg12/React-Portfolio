import React, { Component } from 'react';
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
                    <img src="./assets/images/Screen Shot 2019-12-17 at 9.40.04 AM.png" alt=""> </img>
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Day-Planner/" role="button">Day Planner</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Day-Planner" role="button">Github Repository to DP</a>
        
                </div>
                <div className="col-sm">
                    <img src="./assets/images/Screen Shot 2019-12-17 at 9.40.23 AM.png" alt=""> </img>
                    <a className="btn btn-primary" href="https://jmrosenberg12.github.io/Password-Generator/" role="button">Password Generator</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/Password-Generator" role="button">Github Repository to PG</a>
                </div>
                <div className="col-sm">
                    <img src="./assets/images/Screen Shot 2019-12-17 at 9.40.32 AM.png" alt=""> </img>
                    <a className="btn btn-primary" href="https://andrelbarreto.github.io/ProjectOne/index.html" role="button">Project 1</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/ProjectOne" role="button">Github Repository to ProjectOne</a>
                </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <img src="./assets/images/Screen Shot 2020-02-01 at 10.14.03 AM.png" alt=""> </img>
                    <a className="btn btn-primary" href="https://polar-fortress-86358.herokuapp.com" role="button">Burger App</a>
                    <a className="btn btn-success" href="https://github.com/JMRosenberg12/burger" role="button">Github Repository to Burger App</a>
                </div>
                <div className="col-sm">
                  <img src="./assets/images/Screen Shot 2020-02-17 at 8.13.13 AM.png"> </img>
                  <a className="btn btn-primary" href="https://serene-dawn-05814.herokuapp.com/" role="button">Note Taker</a>
                  <a className="btn btn-success" href="https://github.com/JMRosenberg12/Note-Taker" role="button">Github Repoistory to Note Taker</a>
                </div>
                <div className="col-sm">
                  <img src="./assets/images/Screen Shot 2020-02-17 at 8.04.13 AM.png"> </img>
                  <a className="btn btn-primary" href="https://spiderfly.herokuapp.com" role="button">Project 2</a>
                  <a className="btn btn-success" href="https://github.com/icek567/Project-2" role="button">Github Repository to Project 2</a>
                </div>
              </div>
            </div>
            </React.Fragment>
          
        
        
                
    
        );
    }
  } 