import React, { Component } from 'react';
import { getBlogBySlug, getBlogByCategory, getCategories } from '../../API/Blogs';

var currentPath = '';
if(process.browser){
	currentPath = window.location.pathname;	
}

class Sidebar extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  activeClass	: 	null,
		  categoryArray	: 	[],
		  mobileMenu	: 	false,
		};
	}
	componentDidMount(){ 
	
	}
	
   render(){
      return(
<div className="sidebar d-flex flex-column bg-white">
    <div className="sidebar-info d-flex align-items-center">
        <img className="sidebar-info-img" src="../../../assets/img/profile-pic.png" alt="profile picture" />
        <div className="d-flex flex-column">
            <p className="sidebar-info-name m-0">Andrew<span className="align-middle"></span></p>
            <p className="sidebar-info-title m-0">Boss</p>
        </div>
    </div>

    <div className="sidebar-group">
        <h3>GIVE FEEDBACK</h3>
        <div className="dropdown d-flex align-items-center ">
            <a className="dropdown-toggle btn sidebar-dropdown text-left align-middle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              To your people
            </a>
          
            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="Feedback">Feedback menu</a>
            </div>
          </div>
    </div>

    <div className="sidebar-body">
        <div className="sidebar-group">
            <h3>TEAMS</h3>
            <ul className="list-unstyled">
                <li><a href="MyTeam">Results </a></li>
                <li><a href="TeamExport">Export results </a></li>
                <li><a href="ManageTeam">Manage teams </a></li>
                <li><a href="#">Create a new team </a></li>
            </ul>
        </div>

        <div className="sidebar-group">
            <h3>PEOPLE</h3>
            <ul className="list-unstyled">
                <li className="active"><a href="/">Results </a></li>
                <li><a href="PeopleExport">Export results </a></li>
                <li><a href="ManagePeople">Manage people</a></li>
                <li><a href="InvitePeople">Invite new people </a></li>
            </ul>
        </div>

        <div className="sidebar-group">
            <h3>ME</h3>
            <ul className="list-unstyled">
                <li><a href="#">Results </a></li>
                <li><a href="#">My account </a></li>
            </ul>
        </div>

        <div className="sidebar-group">
            <h3>ADMIN</h3>
            <ul className="list-unstyled">
                <li><a href="#">User/team register </a></li>
                <li><a href="#">Company Profile </a></li>
            </ul>
        </div>
    </div>
</div>


      );
   }
}
export default Sidebar;
