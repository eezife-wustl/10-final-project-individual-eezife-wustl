import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';

class PoemTool extends Component {
  constructor(props) {
    super(props);
    this.state = {value="Pick For Me"}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
      <select className="form-select form-select-lg" aria-label="Default select example" id="PoemTopic" onChange={this.props.onClick} value={this.state.value}>
          <option selected value="Pick For Me">Pick For Me</option>
          <option value="Love">Love</option>
          <option value="Nature">Nature</option>
          <option value="Gratitde">Gratitde</option>
          <option value="Humor">Humor</option>
          <option value="Joy">Joy</option>
          <option value="Passion">Passion</option>
          <option value="Nostalgia">Nostalgia</option>
          <option value="Optimism">Optimism</option>
          <option value="Contentment">Contentment</option>
          <option value="Boredom">Boredom</option>
          <option value="Pessimism">Pessimism</option>
          <option value="Frustration">Frustration</option>
        </select>
    </div>
    );
  }
}

export default PoemTool;
