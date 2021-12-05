import logo from './logo.svg';
import React, { Component } from 'react';
import './PoemWords.css';

class PoemWords extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
          <p id="myWords" style={{ fontSize: '1.5rem' }}> Write a poem using this form: </p>
          <span style={{ fontSize: '1.5rem' }}> {this.props.PoemStuff} </span>
          <p id="myWords"> Drawing inspiration from these words: </p>
      </div>
    );
  }
}

export default PoemWords;
