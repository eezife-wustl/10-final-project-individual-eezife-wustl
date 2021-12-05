import logo from './logo.svg';
import React, { Component } from 'react';
import _, { map } from 'underscore';
import './style.css';
import PoemTool from './PoemTool';
import PoemWords from './PoemWords';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    //credit to https://poets.org/ for the definitions 
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

      myPoemForm:"",

      myPoemWords: [],

      myPoemTopic:"Pick For Me",
      // love, nature, gratitude, humor, joy, passion, nostalgia, optimism, contentment, boredom, pessimism, frustration, random 

      randomPoemTopic: [
        "Love",
        "Nature",
        "Gratitde",
        "Humor",
        "Joy",
        "Passion",
        "Nostalgia",
        "Optimism",
        "Contentment",
        "Boredom",
        "Pessimism",
        "Frustration"
      ],

      randomPoemWords: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickRandomWords = this.pickRandomWords.bind(this);
  }

  componentDidMount() {
    let myRequest;
    //love, nature, gratitude, humor, joy, passion, nostalgia, optimism, contentment, boredom, pessimism, frustration, random
    this.setState({myPoemForm: this.state.poemForms[Math.floor(Math.random() * this.state.poemForms.length)] });
    console.log(this.state.myPoemTopic);
    myRequest = new Request("https://api.datamuse.com/words?topics="+(this.state.randomPoemTopic[Math.floor(Math.random() * this.state.randomPoemTopic.length)])+"&max=1000");
    var stateObject = this;

    fetch(myRequest)
    .then((response) => response.json())
    .then(function(data) {
      stateObject.setState({myPoemWords: data});
      // console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  handleChange(event) {
    var stateObject = this;
    stateObject.setState({myPoemTopic: event.target.value});
    // stateObject.setState({myPoemTopic: event.target.value}, this.handleChange);
    // console.log(event.target.value);
    // console.log(this.state.myPoemTopic);
  }

  handleSubmit(event) {
    event.preventDefault();
    //this.setState({input: event.target.value});
    //console.log('alert');
    //alert('alert');
    //thank youuuuuu: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
    let myRequest;
    //love, nature, gratitude, humor, joy, passion, nostalgia, optimism, contentment, boredom, pessimism, frustration, random
    this.setState({myPoemForm: this.state.poemForms[Math.floor(Math.random() * this.state.poemForms.length)] });
    console.log(this.state.myPoemTopic);

    if (this.state.myPoemTopic === "Pick For Me") {
      myRequest = new Request("https://api.datamuse.com/words?topics="+(this.state.randomPoemTopic[Math.floor(Math.random() * this.state.randomPoemTopic.length)])+"&max=1000");
      console.log(myRequest);
    }
    else {
      myRequest = new Request("https://api.datamuse.com/words?topics="+this.state.myPoemTopic+"&max=1000");
      console.log(myRequest);
    }

    console.log(myRequest);
    var stateObject = this;

    fetch(myRequest)
    .then((response) => response.json())
    .then(function(data) {
      stateObject.setState({myPoemWords: data});
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });



    // this.setState({myPoemWords: _.shuffle(this.state.myPoemWords).slice(0,10)});
    this.setState({randomPoemWords: _.shuffle(this.state.myPoemWords).slice(0,10)});
    console.log(this.state.randomPoemWords);
    console.log(this.state.myPoemWords); 
  }

  pickRandomWords(myArray) {
    var random = new Array(10);
    for (let i=0; i < 11; i++) {
      random[i] = myArray[Math.floor(Math.random() * myArray.length)];
    }
    return random;
  }
  render () {
    return (
      <div className="App"> 
              <Header />
              <div className="container">
                <div className="row"> 
                  <PoemTool onClick={this.handleSubmit} onChange={this.handleChange} PoemTopic={this.state.myPoemTopic}/>
                  {/* <PoemTopic /> */}
                </div>
                <div className="row"> 
                  <div className="col">
                    <PoemWords PoemStuff={this.state.myPoemForm}/>
                  </div>
                  <div className="col">
                    <p id="myWords"> Drawing inspiration from these words: </p>
                    {
                      this.state.randomPoemWords.map((words) => 
                        <p key={words.word}>{words.word} </p>
                      )
                    }
                  </div>
                  </div>
              </div>
      </div>
    );
  }
}

export default App;
