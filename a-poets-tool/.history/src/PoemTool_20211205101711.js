import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';

class PoemTool extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="form-group col-md" id="myWordForm">
        <p> Poetry is hard. When I attempt to write, I'm often stuck wondering <i>what</i> exactly to write about.
        So I made this little tool. Click the button, and you'll be given a list of words to draw inspiration from,
        along with a poetic form you can use. But feel free to write what you'd like - this is only a start.     
        ~ xoxo Erika
        </p>
      {/* love, nature, gratitude, humor, joy, passion, nostalgia, optimism, contentment, boredom, pessimism, frustration, random */}
      <button type="button" className="btn btn-dark btn-lg" onClick={this.props.onClick}>BE INSPIRED</button>
      <span> Select a Subject to Generate Words From: </span>
      <select className="form-select form-select-lg" aria-label="Default select example">
          <option selected>Pick For Me</option>
          <option value="1">Love</option>
          <option value="2">Nature</option>
          <option value="3">Gratitde</option>
          <option value="3">Humor</option>
          <option value="3">Joy</option>
          <option value="3">Passion</option>
          <option value="3">Nostalgia</option>
          <option value="3">Optimism</option>
          <option value="3">Contentment</option>
          <option value="3">Boredom</option>
          <option value="3">Pessismism</option>
          <option value="3">Humor</option>
        </select>
    </div>
    );
  }
}

export default PoemTool;
