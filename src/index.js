import React 		from 	'react';
import ReactDOM 	from 	'react-dom';
import 				 		'./index.css';

import Header 		from 	'./components/Common/Header';
import Sidebar 		from 	'./components/Common/Sidebar';
import Footer 		from 	'./components/Common/Footer';
import Home 		from 	'./components/Home/Home';
import * as serviceWorker 	from 	'./serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



const routing = (
  <Router>
      <Route exact path="/" component={Home} />
  </Router>
)


ReactDOM.hydrate(routing, document.getElementById('root'));
ReactDOM.hydrate(<Header/>, document.getElementById('header'));
ReactDOM.hydrate(<Sidebar/>, document.getElementById('Sidebar'));
// ReactDOM.hydrate(<Footer/>, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
