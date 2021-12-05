import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';

class PoemTopic extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="col-md" id="poemTopic">
        <select classN ="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
    </div>
    );
  }
}

export default PoemTopic;
