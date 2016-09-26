import React, { Component } from 'react';
import './styles/Blog.css';
import './styles/App.css';
import { Link } from 'react-router';

class Blog extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <ul className="header-bar">
            <li className="blog-animate"><Link to="/About">About</Link></li>
            <li className="blog-animate"><Link to="/Coding">Coding Projects</Link></li>
            <li className="blog-animate"><Link to="/Art">Art Projects</Link></li>
            <li className="blog-animate"><Link to="/Resume">Resume</Link></li>
            <li className="last blog-animate"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
        <h3 className="non-float-blog"><Link to="/">MAGGIE MERRELL</Link></h3>


        <section className="about-blog">
          here are my thoughts. aren't i insightful?
        </section>
      </div>
    );
  }
}

export default Blog;
