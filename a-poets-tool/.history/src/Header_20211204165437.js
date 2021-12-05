import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render () {
    return (
      <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top fixed-top-1 bg-light" id="poetsToolBox">
          <div className="container justify-content-center">
              <NavLink className="navbar-brand" href="index.html">A POET'S TOOL.</NavLink>
          </div>
      </nav>
      <nav className="navbar navbar-expand-md fixed-top fixed-top-2 bg-dark">
          <div className="container justify-content-center">
              <a className="nav-link" href="#">NEED MORE TOOLS?</a>
          </div>
      </nav>
    </header>
    );
  }
}

export default Header;
