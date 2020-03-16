import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <body
        background="./assets/images/hotel-wallpaper.png"></body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Jacob Rosenberg</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">      
                  <span class="navbar-toggler-icon"></span>
                  
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                
                  <ul class="navbar-nav">
        
                      <a class="nav-link" href="index.html">About Me</a>
                    </ul>
                    <li class="nav-item">
                            
                      <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">

                            <li class="nav-item active">
                      <a class="nav-link" href="#">Portfolio<span class="sr-only">(current)</span></a>
                    </li>
              
                    </li>
                  </div>
                </nav>
                
              <nav></nav>
              <div class="container"> </div>
              <header>
                  Portfolio
              </header>

              <div class="row">
                <div class="col-sm">
                    <img src="./assets/images/Screen Shot 2019-12-17 at 9.40.04 AM.png" alt=""> </img>
                    
                    <a class="btn btn-primary" href="https://jmrosenberg12.github.io/Day-Planner/" role="button">Day Planner</a>
                    <a class="btn btn-success" href="https://github.com/JMRosenberg12/Day-Planner" role="button">Github Repository to DP</a>
        
                </div>
                <div class="col-sm">
                    <img src="./assets/images/Screen Shot 2019-12-17 at 9.40.23 AM.png" alt=""> </img>
                    <a class="btn btn-primary" href="https://jmrosenberg12.github.io/Password-Generator/" role="button">Password Generator</a>
                    <a class="btn btn-success" href="https://github.com/JMRosenberg12/Password-Generator" role="button">Github Repository to PG</a>
                </div>
                <div class="col-sm">
                    <img src="./assets/images/Screen Shot 2019-12-17 at 9.40.32 AM.png" alt=""> </img>
                    <a class="btn btn-primary" href="https://andrelbarreto.github.io/ProjectOne/index.html" role="button">Project 1</a>
                    <a class="btn btn-success" href="https://github.com/JMRosenberg12/ProjectOne" role="button">Github Repository to ProjectOne</a>
                </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <img src="./assets/images/Screen Shot 2020-02-01 at 10.14.03 AM.png" alt=""> </img>
                    <a class="btn btn-primary" href="https://polar-fortress-86358.herokuapp.com" role="button">Burger App</a>
                    <a class="btn btn-success" href="https://github.com/JMRosenberg12/burger" role="button">Github Repository to Burger App</a>
                </div>
                <div class="col-sm">
                  <img src="./assets/images/Screen Shot 2020-02-17 at 8.13.13 AM.png"> </img>
                  <a class="btn btn-primary" href="https://serene-dawn-05814.herokuapp.com/" role="button">Note Taker</a>
                  <a class="btn btn-success" href="https://github.com/JMRosenberg12/Note-Taker" role="button">Github Repoistory to Note Taker</a>
                </div>
                <div class="col-sm">
                  <img src="./assets/images/Screen Shot 2020-02-17 at 8.04.13 AM.png"> </img>
                  <a class="btn btn-primary" href="https://spiderfly.herokuapp.com" role="button">Project 2</a>
                  <a class="btn btn-success" href="https://github.com/icek567/Project-2" role="button">Github Repository to Project 2</a>
                </div>
                </div>
                
               
                
        
        
                
               

                    <body>
                        <footer>
                            <div class="wrapper">
                          
                             
                          
                              <div class="push"></div>
                              
                            </div>
                            
                            <nav class="navbar fixed-bottom navbar-dark bg-dark">
                              <a class="navbar-brand" href="#">Copyright 2019</a>
                            </nav>
                            </footer>
                            
                          </body>
        );
    }
  } 