import React 				from 	'react';
import ReactDOM 			from 	'react-dom';
import App 					from 	'./App.js';

import login 				from 	'./components/Login';
import Sidebar 				from 	'./components/Common/Sidebar';
import Footer 				from 	'./components/Common/Footer';
import Home 				from 	'./components/Home/Home';
import ManagePeople 		from 	'./components/Home/ManagePeople';
import AllPeople 		from 	'./components/Home/AllPeople';
import PeopleExport 		from 	'./components/Home/PeopleExport';
import InvitePeople 		from 	'./components/Home/InvitePeople';


import ManageTeam 			from 	'./components/Teams/ManageTeam';
import MyTeam 				from 	'./components/Teams/MyTeam';
import AllTeam 				from 	'./components/Teams/AllTeam';
import TeamExport 			from 	'./components/Teams/TeamExport';

import Feedback 			from 	'./components/Feedback/Feedback';
import FeedbackDetail 		from 	'./components/Feedback/FeedbackDetail';

import * as serviceWorker 	from 	'./serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



const routing = (

  <Router>
      <Route exact path="/" 				component={Home} />
      <Route exact path="/login" 			component={login} />
      <Route exact path="/AllPeople" 		component={AllPeople} />
      <Route exact path="/InvitePeople" 	component={InvitePeople} />
      <Route exact path="/ManagePeople" 	component={ManagePeople} />
      <Route exact path="/PeopleExport" 	component={PeopleExport} />
      <Route exact path="/ManageTeam" 		component={ManageTeam} />
      <Route exact path="/MyTeam" 			component={MyTeam} />
      <Route exact path="/AllTeam" 			component={AllTeam} />
      <Route exact path="/TeamExport" 		component={TeamExport} />
      <Route exact path="/Feedback" 		component={Feedback} />
      <Route exact path="/FeedbackDetail" 	component={FeedbackDetail} />
  </Router>
)


ReactDOM.hydrate(routing, document.getElementById('root'));
// ReactDOM.hydrate(<Header/>, document.getElementById('header'));
if(window.location.pathname	!=='/login'){
	ReactDOM.hydrate(<Sidebar/>, document.getElementById('Sidebar'));
}
// ReactDOM.hydrate(<Footer/>, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
