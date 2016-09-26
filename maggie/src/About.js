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
            <li className="about-animate"><Link to="/About">About</Link></li>
            <li className="about-animate"><Link to="/Coding">Coding Projects</Link></li>
            <li className="about-animate"><Link to="/Art">Art Projects</Link></li>
            <li className="about-animate"><Link to="/Resume">Resume</Link></li>
            <li className="last about-animate"><Link to="/Contact">Blog</Link></li>
          </ul>
        </div>
        <h3 className="non-float"><Link to="/">MAGGIE MERRELL</Link></h3>

        <section className="aboutMaggie">
          hiya pals, here is a bunch about me and my background
        </section>
      </div>
    );
  }
}

export default About;
