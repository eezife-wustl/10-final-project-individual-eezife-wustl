import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';
import PoemTool from './PoemTool';
import PoemWords from './PoemWords';
import Header from './Header';

class App extends Component {
  render () {
    constructor(props) {

    }

    this.componentDidMount() {

    }
    
    return (
      <div className="App"> 
              <Header />
              <div className="container">
                <div className="row"> 
                  <PoemTool />
                  <PoemWords />
                </div>
              </div>
      </div>
    );
  }
}

export default App;
