import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
             MeTube
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Lets get Started
            </a>
          </header>
        </div>
    );
  }
}

export default App;
