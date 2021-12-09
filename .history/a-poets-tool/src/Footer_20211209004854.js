import logo from './logo.svg';
import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <footer>
      <div className="container justify-content-center">
          <p> <a href="http://w3schools.com"> This is a link</a> </p>
      </div>
    </footer>
    );
  }
}

export default Header;
