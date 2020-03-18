import React , {Component} from 'react';
import Contact from 'react';

 export class Contact extends Component{
    render() {
      return(
        <div class="container">
          <header>Contact</header>
          <form>
                <div class="form-group">
                    <label for="your name">Your Name</label>
                    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Your Name"></input>
            <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"></input>
                  <small id="emailHelp" ></small>
                <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
             </div>
        
      );
    }
  }
