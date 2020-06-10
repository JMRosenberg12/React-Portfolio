import React, { Component } from 'react';
import AboutMe from "./images/aboutme.jpg"
import './css/aboutme.css'


class About extends Component {
  render() {
    return(
      <React.Fragment>
      <div>
        <div className="container">
        <div className="row">
          <div className="col">
              <header>
              <h1>About Me</h1>
              </header>
              <img src={AboutMe} alt=""></img>
          </div>
          <div className="col">
          Front End Web Developer with a background in IT support and gaming audio. Looking to use technical skills and experience to create intuitive user experiences while collaborating with others to solve programming challenges. Skills that I'm good at like HTML, Javascript, Bootstrap(CSS), React, and Heroku. 
    </div>
    </div>
    </div> 
  </div> 
  <div className="container">
    <div className="col">
      <a className="btn btn-dark" href="https://github.com/JMRosenberg12" role="button">My Github</a>
    </div>

    <div className="col">
      <a className="btn btn-info" href="https://www.linkedin.com/in/jacob-rosenberg-606a99161/" role="button">My Linkedin</a>
    </div>

    <div className="col">
      <a className="btn btn-warning" href="https://jmrosenberg12.github.io/Jacob-Rosenberg-s-Portfolio/Rosenberg_Jacob_Resume.pdf" role="button">My Resume </a>

      <div className="col">
        Email: JMRosenberg@alumni.fullsail.edu
      </div>
      <div className="col">
        Phone number: 847-917-9635
      </div>
      </div>
  </div>
  </React.Fragment>
      
    );
  }
    
}



export default About;
