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
      </nav>
    </header>
    );
  }
}

export default Header;
