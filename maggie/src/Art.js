import React, { Component } from 'react';
import './styles/Art.css';
import curatedHams from './assets/enticing.jpg';
import hair from './assets/hair.jpg';
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
            <li className="last art-animate"><a href="https://drive.google.com/file/d/0B226wtsM-2R2QzU2UWlOMERPQm8/view">Resume</a></li>
            {/* <li className="last art-animate"><Link to="/Blog">Blog</Link></li> */}
          </ul>
        </div>
        <h3 className="wrapper"><Link to="/"><p>MAGGIE MERRELL</p></Link></h3>

          <section className="enticing-code">
            <div><h3>
              <a href="https://curatedhams.wordpress.com/"><img src={curatedHams} alt="HAMS-screenshot" height="200px" width="auto"/></a>
            </h3></div>
          <div><h3>enticing the eye / exploring the frame</h3><br/>
          <p>Principal curator/president for 2014 exhibition at the Herbert F. Johnson Museum</p>
          <p>Founder of blog curatedHAMS and instagram insta__hams</p>
          <p>Reviews: <a href="https://issuu.com/cornellsun/docs/04-25-14_entire_issue_lo_res">Cornell Sun</a>, <a href="http://www.news.cornell.edu/stories/2014/05/art-history-majors-explore-framing-literal-abstract">Cornell Chronicle</a>, <a href="http://www.museum.cornell.edu/sites/default/files/files//hfj-enticing-exploring.pdf">Catalogue</a></p>
          </div>
          </section>
          <section className="hair-code">
            <div><h3>
              <a href="http://www.museum.cornell.edu/exhibitions/hair-untangling-roots-identity"><img src={hair} alt="hair-screenshot" height="200px" width="auto"/></a>
            </h3></div>
          <div><h3>Hair: Untangling Roots of Identity</h3><br/><p>Marketing/PR lead for 2013 exhibition at the Herbert F. Johnson Museum</p></div>
          </section>


      </div>
    );
  }
}

export default Art;
