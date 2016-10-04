import React, { Component } from 'react';
import './styles/App.css';
import artprojects from "./assets/artprojects.jpg";
import babymaggie from "./assets/babymaggie.jpg";
import codingprojects from "./assets/codingprojects.png";
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h3 className="floating-name">MAGGIE MERRELL</h3>

      <section className="images-display">
        <Link to="/About"><img src={babymaggie} alt="maggie-baby" height="200" width="200" /></Link>
        <Link to="/Coding"><img src={codingprojects} alt="coding" height="200" width="200"/></Link>
        <Link to="/Art"><img src={artprojects} alt="art-exhibits" height="200" width="200"/></Link>


      </section>
      </div>
    );
  }
}

export default App;
