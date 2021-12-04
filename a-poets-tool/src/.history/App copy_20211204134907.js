import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App"> 
              <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top fixed-top-1 bg-light" id="poetsToolBox">
                    <div className="container justify-content-center">
                        <a className="navbar-brand" href="index.html">A POET'S TOOL.</a>
                    </div>
                </nav>
                <nav class="navbar navbar-expand-md fixed-top fixed-top-2 bg-dark">
                    <div class="container justify-content-center">
                        <a class="nav-link" href="#">NEED MORE TOOLS?</a>
                    </div>
                </nav>
              </header>
              <div class="container">
                
              </div>
      </div>
    );
  }
}

export default App;
