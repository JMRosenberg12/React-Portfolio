import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
          <header id="home" />
          <nav className="navbar navbar-expand-lg navbar-light bg-success" >
    <a className="navbar-brand text-white" href="." >Jacob Rosenberg</a>
    </nav>
      </React.Fragment>
      );
    }
  }