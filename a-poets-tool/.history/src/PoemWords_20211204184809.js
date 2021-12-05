import logo from './logo.svg';
import React, { Component } from 'react';
import './PoemWords.css';

class PoemWords extends Component {
  render () {
    return (
      <div className="container">
          <p id="myWords"> Write a poem using this form: </p>
          <span> </span>
      </div>
    );
  }
}

export default PoemWords;
