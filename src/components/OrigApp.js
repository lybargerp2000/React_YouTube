import React from 'react';
import logo from './logo.svg';
import './App.css';
import Die from './components/Die';

function App() {
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="App">
                <h1>NFL Matchup of the Week</h1>
                <Die numberOfSides={10} buttonClick={(message) => this.display(message)}/>
  ​
                {/* <RegisterForm /> */}
            </div>
         
        </header>
      </div>
    );
  }
  
  export default App;
  