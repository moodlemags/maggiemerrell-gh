import React, { Component } from 'react';
import './styles/App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Coding">Coding Projects</Link></li>
            <li><Link to="/Art">Art Projects</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li className="last"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="floating-name">MAGGIE MERRELL</h3>
      </div>
    );
  }
}

export default App;
