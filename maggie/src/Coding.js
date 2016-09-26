import React, { Component } from 'react';
import './styles/Coding.css';
import './styles/App.css';
import { Link } from 'react-router';

class Coding extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li className="coding-animate"><Link to="/About">About</Link></li>
            <li className="coding-animate"><Link to="/Coding">Coding Projects</Link></li>
            <li className="coding-animate"><Link to="/Art">Art Projects</Link></li>
            <li className="coding-animate"><Link to="/Resume">Resume</Link></li>
            <li className="last coding-animate"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="non-float-coding"><Link to="/">MAGGIE MERRELL</Link></h3>

        <section className="about-code">
          here are things that i made with code
        </section>
      </div>
    );
  }
}

export default Coding;
