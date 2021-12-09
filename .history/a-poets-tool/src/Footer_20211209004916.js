import logo from './logo.svg';
import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <footer>
      <div className="container justify-content-center">
          <h1> <a href="https://www.datamuse.com/api/"> Powered by Datamuse API </a> </h1>
      </div>
    </footer>
    );
  }
}

export default Header;
