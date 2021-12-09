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
      <nav className="navbar navbar-expand-md static-top-0 static-top-2 bg-dark">
          <div className="container justify-content-center">
            <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Action
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
              <a className="nav-link" href="#">NEED MORE TOOLS?</a>
              {/* <NavLink className="nav-link" to="/needmoretools">NEED MORE TOOLS?</NavLink> */}
          </div>
      </nav>
    </header>
    );
  }
}

export default Header;
