import React, { Component } from 'react';
import React, {Fragment} from 'react';
export default class Contact extends Component {
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
                </nav>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
        
                      <a class="nav-link" href="index.html">About Me</a>
                    </ul>
                     
                    <li class="nav-item">
                            <li class="nav-item active">
                      <a class="nav-link" href="#">Contact<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Portfolio.html">Portfolio</a>
                    </li>
              
                    </li>
                  </div>
                
              

              <div class="container"> </div>

              <header>Contact</header>
        <form>
                <div class="form group">
                    <label for="your name">Your Name</label>
                    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Your Name">
            <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email">
                  <small id="emailHelp" ></small>
                <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                      </input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </input> 
                </div>
                </form>
<body>
        <div class="wrapper">
      
         
      
          <div class="push"></div>
          
        </div>
       
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Copyright 2019</a>
        </nav>
        
        
</body> 
    ),
    }

}
