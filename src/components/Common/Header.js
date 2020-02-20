import React, { Component } from 'react';
import { getBlogBySlug, getBlogByCategory, getCategories } from '../../API/Blogs';

var currentPath = '';
if(process.browser){
	currentPath = window.location.pathname;	
}

class Header extends Component{
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
		 <div className="results-header">
            <div className="results-header-logout d-flex justify-content-between">
                <p className="mb-0">People</p>
                <p className="text-right align-middle"><a href="../people-signin/index.html">Logout</a> <i
                        className="material-icons align-middle">exit_to_app</i></p>
            </div>
            <h2 className="mt-1 align-middle">Results</h2>
            <div className="d-flex justify-content-between align-items-center">
                <p className="choose"><span><a href="../people-results-key-people/index.html" className="active">My key people</a></span><span className="mx-2 divider"> I </span><a href="../people-results-all-people/index.html">All people</a></p>
                <button>Remove from my key people</button>
            </div>
        </div>
     
      );
   }
}
export default Header;
