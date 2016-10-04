import React, { Component } from 'react';
import './styles/Coding.css';
import './styles/App.css';
import guessWho from './assets/guesswho.png';
import lyricalGenius from './assets/lyricalgenius.png';
import allergenFinder from './assets/allergenFinder.png';
import artinder from './assets/artinder.png';
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
            <li className="last coding-animate"><a href="https://drive.google.com/file/d/0B226wtsM-2R2QzU2UWlOMERPQm8/view">Resume</a></li>
            {/* <li className="last coding-animate"><Link to="/Blog">Blog</Link></li> */}
          </ul>
        </div>
        <h3 className="non-float-coding"><Link to="/">MAGGIE MERRELL</Link></h3>
        <section className="artinder-code">
          <div><h3>
            <a href="https://afternoon-oasis-82482.herokuapp.com"><img src={artinder} alt="artTinder-screenshot" width="300px" height="auto"/></a>
          </h3></div>
        <div><h3>ArTinder</h3><br /><p>Tech: React, Ruby on Rails, JavaScript, Node.js, Express, SQL, Artsy API, Bootstrap React</p><p>Adapted to work with React Native</p></div>
        </section>
        <section className="lyricalgenius-code">
          <div><h3>
            <a href="https://immense-beach-20112.herokuapp.com"><img src={lyricalGenius} alt="lyricalgenius-screenshot" width="300px" height="auto"/></a>
          </h3></div>
	        <div><h3>Lyrical Genius</h3><br /><p>Tech: React, Node.js, Express, Firebase DB, 6 APIs (including Youtube)</p></div>
        </section>
        <section className="allergen-code">
          <div><h3>
            <a href="https://immense-beach-20112.herokuapp.com"><img src={allergenFinder} alt="allergenFinder-screenshot" width="auto" height="200"/></a>
          </h3></div>
        <div><h3>Cookin' w/o Allergens</h3><br /><p>Tech: JavaScript, jQuery, Ajax, Node.js, Express, MongoDB, Yummly API</p></div>
        </section>
        <section className="guesswho-code">
          <div><h3>
            <a href="https://moodlemags.github.io/guesswho-artedition/"><img src={guessWho} alt="guesswho-screenshot" width="300px" height="auto"/></a>
          </h3></div>
          <div><h3>Guess Who: Artist Edition</h3><br /><p>Tech: HTML, JavaScript, CSS, Bootstrap, GH Pages</p></div>
        </section>
      </div>
    );
  }
}

export default Coding;
