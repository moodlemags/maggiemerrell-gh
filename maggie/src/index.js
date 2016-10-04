import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Coding from './Coding';
import Art from './Art';
import Blog from './Blog';
import { Router, Route, browserHistory } from 'react-router';
import './styles/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/About" component={About} />
    <Route path="/Coding" component={Coding} />
    <Route path="/Art" component={Art} />
    <Route path="/Blog" component={Blog} />
  </Router>
,document.getElementById('root')
);
