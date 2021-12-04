import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div class="form-group col-md" id="myWordForm">
      <p> Poetry is hard. When I attempt to write, I'm often stuck wondering <i>what</i> exactly to write about.
      So I made this little tool. Click the button, and you'll be given a list of words to draw inspiration from,
      along with a poetic form you can use. But feel free to stay from the words and form given - this is only a start.     
      ~ xoxo Erika
      </p>
      <button type="button" class="btn btn-dark btn-lg">BE INSPIRED</button>
    </div>
    );
  }
}

export default App;
