import logo from './logo.svg';
import React, { Component } from 'react';
import './style.css';
import PoemTool from './PoemTool';
import PoemWords from './PoemWords';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poemForms: [
        "Aubade: a dawn song that greets the morning while lamenting the end of the night, often concerning the parting of lovers.",
        ""

      ]

    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    this.setState({input: event.target.value});
    //console.log('alert');
    //alert('alert');
  }

  render () {
    return (
      <div className="App"> 
              <Header />
              <div className="container">
                <div className="row"> 
                  <PoemTool onChange={this.handleChange}/>
                  <PoemWords />
                </div>
              </div>
      </div>
    );
  }
}

export default App;
