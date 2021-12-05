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
        "Ballad: a plot-driven song with one or more characters and often constructed in quatrain stanzas.",
        "Blank Verse: poetry that does not rhyme but follows a regular meter, most commonly iambic pentameter.",
        "Free Verse: poetry not dictated by an established form or meter and often influenced by the rhythms of speech.",
        "Lyric Poetry: a non-narrative poem, often with songlike qualities, that expresses the speaker’s personal emotions and feelings.",
        "Persona Poem: a poem also known as a dramatic monologue in which the poet assumes the voice of another person, fictional character, or identity.",
        "Sestina: a complex, thirty-nine-line poem featuring the intricate repetition of end-words in six stanzas and an envoi.",
        "Terza Rima: a form invented in fourteenth-century Italy that is composed of tercets woven into a complex rhyme scheme. ",
        "Sonnet: a fourteen-line poem traditionally written in iambic pentameter, employing one of several rhyme schemes, and adhering to a tightly structured thematic organization. "
      ],

      myPoemForm:""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  handleChange(event) {
    this.setState({input: event.target.value});
    //console.log('alert');
    //alert('alert');
    this.setState({myPoemForm: });

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
