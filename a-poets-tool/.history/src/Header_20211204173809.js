import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';
import { NavLink } from "react-router-dom";

class Header extends Component {
  render () {
    return (
      <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top fixed-top-1 bg-light" id="poetsToolBox">
          <div className="container justify-content-center">
              <NavLink className="navbar-brand" to="/">A POET'S TOOL.</NavLink>
              {/* <NavLink to="/">Home</NavLink> */}
          </div>
      </nav>
      <nav className="navbar navbar-expand-md fixed-top fixed-top-2 bg-dark">
          <div className="container justify-content-center">
              {/* <a className="nav-link" href="#">NEED MORE TOOLS?</a> */}
              {/* <NavLink className="nav-link" to="/needmoretools">NEED MORE TOOLS?</NavLink> */}
          </div>
      </nav>
    </header>
    );
  }
}

export default Header;
