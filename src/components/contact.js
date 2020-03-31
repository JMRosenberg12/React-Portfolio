import React, {Component} from 'react';

export default class Contact extends Component{
    render() {
      return(
        <React.Fragment>
        <div className="container">
          <header>Contact</header>
          <form>
                <div className="form-group">
                    <label for="your name">Your Name</label>
                    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Your Name"></input>
            <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"></input>
                  <small id="emailHelp" ></small>
                <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
             </div>
             </React.Fragment>
        
      );
    }
  }
