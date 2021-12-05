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
          <p id="myWords"> Write a poem using this form: </p>
          <span> {this.props.PoemStuff} </span>
          <p id="myWords"> Write a poem using this form: </p>
      </div>
    );
  }
}

export default PoemWords;
