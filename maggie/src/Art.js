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
            <li className="art-animate"><a href="https://drive.google.com/file/d/0B226wtsM-2R2QzU2UWlOMERPQm8/view">Resume</a></li>
            <li className="last art-animate"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="wrapper"><Link to="/"><p>MAGGIE MERRELL</p></Link></h3>

        <section className="about-art">
          <div className="curatorial">History of Art Majors' Society</div>
          <div className="curatorial">History of Art Majors' Society</div>
          <div className="curatorial">History of Art Majors' Society</div>

        </section>
      </div>
    );
  }
}

export default Art;
