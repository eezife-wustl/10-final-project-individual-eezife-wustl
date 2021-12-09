import logo from './logo.svg';
import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <footer>
      <div className="container justify-content-center">
          <p> Powered by Datamuse API</p>
      </div>
    </footer>
    );
  }
}

export default Header;
