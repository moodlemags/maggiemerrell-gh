import React, { Component } from 'react';
import './styles/About.css';
import './styles/App.css';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Coding">Coding Projects</Link></li>
            <li><Link to="/Art">Art Projects</Link></li>
            <li><Link to="/Resume">Resume</Link></li>
            <li className="last"><Link to="/Contact">Blog</Link></li>
          </ul>
        </div>
        <h3 className="non-float">MAGGIE MERRELL</h3>

        <section className="aboutMaggie">
          hiya pals
        </section>
      </div>
    );
  }
}

export default About;
