import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <React.Fragment>
      <div>
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
  </div> 
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
  </React.Fragment>
      
    );
  }
    
}



export default About;
