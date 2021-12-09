import logo from './logo.svg';
import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
          <NavDropdown title="NEED MORE RESOURCES?" id="nav-dropdown">
            <NavDropdown.Item href="https://aprweb.org/" target="_blank"> The American Poetry Review </NavDropdown.Item>
            <NavDropdown.Item href="https://lithub.com/" target="_blank"> LitHub </NavDropdown.Item>
            <NavDropdown.Item href="https://www.poetryfoundation.org/" target="_blank"> Poetry Foundation </NavDropdown.Item>
            <NavDropdown.Item className="myDropdown"href="https://poets.org/" target="_blank"> Academy of American poets </NavDropdown.Item>
          </NavDropdown>
              {/* <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" 
                id="navbarDropdown" href="#" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                  NEED MORE TOOLS?</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                </div>
              </div> */}
              {/* <NavLink className="nav-link" to="/needmoretools">NEED MORE TOOLS?</NavLink> */}
          </div>
      </nav>
    </header>
    );
  }
}

export default Header;
