import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <head>
    
    
    
      <meta charset="UTF-8"> </meta>
      <link rel="stylesheet" type="text/css" href="assets/css/style.css"> </link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> </link>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"> </meta>
      
  </head>
  <body
  
  background="./assets/images/hotel-wallpaper.png">
  <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
      <a class="navbar-brand" href="#">Jacob Rosenberg</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">About Me <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Portfolio.html">Portfolio</a>
          </li>
    
          </ul>
        </div>
      </nav>
    </body>
     
    
  
    <h2>
      <div class="container">
          <div class="row">
            <div class="col">
                <header> 
                <h1>About Me</h1>
              </header>
                <img src="assets/images/13335806_10205963346714444_6444609360572548537_n.jpg" alt=""></img>
            </div>
            <div class="col">
             I'm Jacob Rosenberg. I'm Jewish American and I have autism, but I tried hard to do what's right, so I can get a job! I like to do sound design and video gaming. I'm also a percussionist, bacon lover, and a waterpark enthusiast! I graduated from Full Sail after taking the degree of Recording Arts Bachelor of Science. Still looking for a job and more experiences to work on. No Excuses!
             </div> 
             </div>
      </div>
    </h2>
    

    <div class="container">
      <div class="col">
        <a class="btn btn-dark" href="https://github.com/JMRosenberg12" role="button">My Github</a>
      </div>
  
      <div class="col">
        <a class="btn btn-info" href="https://www.linkedin.com/in/jacob-rosenberg-606a99161/" role="button">My Linkedin</a>
      </div>
  
      <div class="col">
        <a class="btn btn-warning" href="Rosenberg_Jacob_Resume.pdf" role="button">My Resume</a>
  
        <div class="col">
          Email: JMRosenberg@student.fullsail.edu
        </div>
        <div class="col">
          Phone number: 847-917-9635
        </div>
  
    </div>
    
  
  </div>
  
  <body>
    <div class="wrapper">
  
     
  
      <div class="push"></div>
      
    </div>
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Copyright 2019</a>
    </nav>
    
  </body>
    );
  }
}

export default About;