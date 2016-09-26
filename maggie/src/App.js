import React, { Component } from 'react';
import './styles/App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li className="home-animate"><Link to="/About">About</Link></li>
            <li className="home-animate"><Link to="/Coding">Coding Projects</Link></li>
            <li className="home-animate"><Link to="/Art">Art Projects</Link></li>
            <li className="home-animate"><Link to="/Resume">Resume</Link></li>
            <li className="last home-animate"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="floating-name">MAGGIE MERRELL</h3>
      </div>
    );
  }
}

export default App;
