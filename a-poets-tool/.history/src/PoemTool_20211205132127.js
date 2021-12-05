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

    </div>
    );
  }
}

export default PoemTool;
