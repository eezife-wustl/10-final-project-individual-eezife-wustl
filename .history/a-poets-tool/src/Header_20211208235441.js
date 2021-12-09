import logo from './logo.svg';
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <header>
      <nav className="navbar navbar-expand-md navbar-light static-top-0 static-top-1 bg-light" id="poetsToolBox">
          <div className="container justify-content-center">
            <a className="navbar-brand" href="index.html">A POET'S TOOL.</a>
              {/* <NavLink to="/">Home</NavLink> */}
          </div>
      </nav>
      <ul className="navbar navbar-expand-md static-top-0 static-top-2 bg-dark">
          <div className="container justify-content-center">
              <li class="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#">NEED MORE TOOLS?</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                </div>
              </div>
              {/* <NavLink className="nav-link" to="/needmoretools">NEED MORE TOOLS?</NavLink> */}
          </div>
      </ul>
    </header>
    );
  }
}

export default Header;
