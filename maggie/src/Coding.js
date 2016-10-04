import React, { Component } from 'react';
import './styles/Coding.css';
import './styles/App.css';
import guessWho from './assets/guesswho.png';
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
            <li className="coding-animate"><a href="https://drive.google.com/file/d/0B226wtsM-2R2QzU2UWlOMERPQm8/view">Resume</a></li>
            <li className="last coding-animate"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="non-float-coding"><Link to="/">MAGGIE MERRELL</Link></h3>

        <section className="about-code">
          <section className="coding-projects">
          <div className="guess-who-project">
            <br /><br />
            <header><span className="project-header">First project:</span>Guess Who</header>
            <p>My first coding project was completed for a Front-End Web Dev class that I took at Flatiron School in Fall of 2014.</p>
            <img src={guessWho} width="150px" height="auto"/>
          </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Coding;
