import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li>About</li>
            <li>Coding Projects</li>
            <li>Art Projects</li>
            <li>Resume</li>
            <li className="last">Contact</li>
          </ul>
        </div>
        <h3 className="floating-name">MAGGIE MERRELL</h3>
      </div>
    );
  }
}

export default App;
