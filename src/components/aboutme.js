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
           I'm Jacob Rosenberg. I'm Jewish American and I have autism, but I tried hard to do what's right, so I can get a job! I like to do sound design and video gaming. I'm also a percussionist, bacon lover, and a waterpark enthusiast! I graduated from Full Sail after taking the degree of Recording Arts Bachelor of Science. Still looking for a job and more experiences to work on. No Excuses! 
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
        Email: JMRosenberg@student.fullsail.edu
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
