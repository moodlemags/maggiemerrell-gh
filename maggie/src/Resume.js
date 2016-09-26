import React, { Component } from 'react';
import './styles/Resume.css';
import './styles/App.css';
import { Link } from 'react-router';

class Resume extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li className="resume-animate"><Link to="/About">About</Link></li>
            <li className="resume-animate"><Link to="/Coding">Coding Projects</Link></li>
            <li className="resume-animate"><Link to="/Art">Art Projects</Link></li>
            <li className="resume-animate"><Link to="/Resume">Resume</Link></li>
            <li className="last resume-animate"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="non-float-resume"><Link to="/"><p>MAGGIE</p><p> MERRELL</p><p>Curator</p></Link></h3>

        <section className="about-resume">
          here are things that i did in the art world
        </section>
      </div>
    );
  }
}

export default Resume;
