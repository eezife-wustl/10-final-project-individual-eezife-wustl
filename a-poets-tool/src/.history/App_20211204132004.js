import logo from './logo.svg';
import './App.css';

function App() {
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    render() {
      return (
      <header>
                <nav class="navbar navbar-expand-md navbar-light fixed-top fixed-top-1 bg-light" id="poetsToolBox">
                    <div class="container justify-content-center">
                        <a class="navbar-brand" href="index.html">A POET'S TOOL.</a>
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
    );
  } 
}

export default App;
