import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';
import PoemTool from './PoemTool';
import Header from './Header';

class App extends Component {
  render () {
    return (
      <div className="App"> 
<PoemTool />
              <div className="container">
                <div className="row"> 
                  <PoemTool />
                </div>
              </div>
      </div>
    );
  }
}

export default App;
