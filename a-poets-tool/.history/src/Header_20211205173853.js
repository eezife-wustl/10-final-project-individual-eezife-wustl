import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render () {
    return (
      <div className="container">
      <header>
      <nav className="navbar navbar-expand-md navbar-light static-top-0 static-top-1 bg-light" id="poetsToolBox">
          <div className="container justify-content-center">
            <a className="navbar-brand" href="index.html">A POET'S TOOL.</a>
              {/* <NavLink to="/">Home</NavLink> */}
          </div>
      </nav>
      <nav className="navbar navbar-expand-md static-top static-top-2 bg-dark">
          <div className="container justify-content-center">
              <a className="nav-link" href="#">NEED MORE TOOLS?</a>
              {/* <NavLink className="nav-link" to="/needmoretools">NEED MORE TOOLS?</NavLink> */}
          </div>
      </nav>
    </header>
    </div>
    );
  }
}

export default Header;
