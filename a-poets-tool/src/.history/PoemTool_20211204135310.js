import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class PoemTool extends Component {
  render () {
    return (
      <div className="form-group col-md" id="myWordForm">
        <p> Poetry is hard. When I attempt to write, I'm often stuck wondering <i>what</i> exactly to write about.
        So I made this little tool. Click the button, and you'll be given a list of words to draw inspiration from,
        along with a poetic form you can use. But feel free to stay from the words and form given - this is only a start.     
        ~ xoxo Erika
        </p>
      <button type="button" className="btn btn-dark btn-lg">BE INSPIRED</button>
    </div>
    );
  }
}

export default PoemTool;
