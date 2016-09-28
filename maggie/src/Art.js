import React, { Component } from 'react';
import './styles/Art.css';
import { Link } from 'react-router';

class Art extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li className="art-animate"><Link to="/About">About</Link></li>
            <li className="art-animate"><Link to="/Coding">Coding Projects</Link></li>
            <li className="art-animate"><Link to="/Art">Art Projects</Link></li>
            <li className="art-animate"><Link to="/Resume">Resume</Link></li>
            <li className="last art-animate"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="wrapper"><Link to="/"><p>MAGGIE MERRELL</p></Link></h3>

        <section className="about-art">
          here are things that i did in the art world
        </section>
      </div>
    );
  }
}

export default Art;
