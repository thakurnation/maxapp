import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';



export default class PeopleProfile extends Component{
	
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
		   
      <div className="people-results-one-user">
        <div className="people-results-one-user-header">
            <div className="people-results-one-user-header-logout d-flex justify-content-between">
                <p className="mb-0 d-flex align-items-center"><i className="material-icons">keyboard_arrow_left</i>Back</p>
                <p className="text-right align-middle"><a href="login">Logout</a> <i
                        className="material-icons align-middle">exit_to_app</i></p>
            </div>
            <h2 className="mt-1 align-middle">Angelo Merte</h2>
            <div className="d-flex justify-content-between align-items-center mt-4">
               <div className="profile-info d-flex text-truncate">
                <p className="m-0 profile-info-team mr-4 text-truncate"><span className="mr-1 d-none d-md-inline-block">Team:</span> Javascript Development</p>
                <p className="m-0 profile-info-position text-truncate"><span className="mr-1 d-none d-md-inline-block">Position:</span> Junior Developer</p>
               </div>

                <div>
                    <div className="buttons d-none d-lg-block">
                        <a href="../people-export/index.html" className="btn-custom-blue">Export</a>
                        <a href="#" className="btn-custom-blue">Settings</a>
                        <a href="#" className="btn-custom-blue">Add to my key people</a>
                    </div>
                    <div className="icons d-sm-block d-lg-none">
                        <a href="#"><i className="material-icons archive">save_alt</i></a>
                        <a href="#"><i className="material-icons settings">settings</i></a>
                        <a href="#"><i className="material-icons add">person_add</i></a>
                    </div>
                </div>
            </div>

        </div>

        <div className="people-results-one-user-body">
            <div className="people-results-one-user-body-left">
                <div className="people-results-one-user-body-left-top">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div>
                            <h3 className="text-truncate mr-2"><span>Colleagues feedback</span></h3>
                            <p className="choose"><a href="#">Weeks</a><span className="mx-2"> I </span> <span className="active"><a href="#">Months</a></span> </p>
                           </div>
                           <a className="share" href="#">Export<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div className="graph-card-body">
                            <div className="bar d-none d-xl-block">
                                <div className="bar-fill bar-fill-red" styles="height: 40%;"></div>
                                <div className="bar-info">JAN</div>
                            </div>
                            <div className="bar d-none d-lg-block">
                                <div className="bar-fill bar-fill-red" styles="height: 35%;"></div>
                                <div className="bar-info">FEB</div>
                            </div>
                            <div className="bar d-none d-lg-block">
                                <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                <div className="bar-info">MAR</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div className="bar-info">APR</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 72%;"></div>
                                <div className="bar-info">MAY</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                <div className="bar-info">JUN</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 65%;"></div>
                                <div className="bar-info">JUL</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div className="bar-info">AUG</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 76%;"></div>
                                <div className="bar-info">SEP</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                <div className="bar-info">OCT</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div className="bar-info">NOV</div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="people-results-one-user-body-left-bottom">
                        <div className="right-container">
                            <div className="people-results-one-user-body-left-bottom-header">
                                <p className="choose text-truncate mr-2"><span className="active"><a href="#">Improvement Ideas</a></span></p>
                                <select name="comment" id="comment">
                                    <option value="april" selected>April</option>
                                    <option value="april">May</option>
                                    <option value="april">Jun</option>
                                </select>

                               
                            </div>
                            <div className="people-results-one-user-body-left-bottom-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        I think the best solution is to kill our enemies first and then start our launch.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error libero in dignissimos sapiente voluptatem?
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad laboriosam repudiandae deserunt molestiae blanditiis nisi nobis labore quasi beatae sequi officiis, velit tempore aliquid.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, maxime dolor blanditiis suscipit vitae commodi beatae. Officiis, beatae?
                                    </p>
                                </li>
                            </ul>
                        </div>
                        </div>
                </div>
            </div>

            <div className="people-results-one-user-body-right">
                <div className="people-results-one-user-body-right-top">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div>
                            <h3 className="text-truncate mr-2"><span>Bosses feedback</span></h3>
                            <p className="choose"><a href="#">Weeks</a><span className="mx-2"> I </span> <span className="active"><a href="#">Months</a></span> </p>
                           </div>
                           <a className="share" href="#">Export<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div className="graph-card-body">
                            <div className="bar d-none d-xl-block">
                                <div className="bar-fill bar-fill-red" styles="height: 40%;"></div>
                                <div className="bar-info">JAN</div>
                            </div>
                            <div className="bar d-none d-lg-block">
                                <div className="bar-fill bar-fill-red" styles="height: 35%;"></div>
                                <div className="bar-info">FEB</div>
                            </div>
                            <div className="bar d-none d-lg-block">
                                <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                <div className="bar-info">MAR</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div className="bar-info">APR</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 72%;"></div>
                                <div className="bar-info">MAY</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                <div className="bar-info">JUN</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 65%;"></div>
                                <div className="bar-info">JUL</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div className="bar-info">AUG</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 76%;"></div>
                                <div className="bar-info">SEP</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                <div className="bar-info">OCT</div>
                            </div>
                            <div className="bar">
                                <div className="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div className="bar-info">NOV</div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="people-results-one-user-body-right-bottom">
                        <div className="right-container">
                            <div className="people-results-one-user-body-right-bottom-header">
                                <p className="choose text-truncate mr-2"><span className="active"><a href="#">Compliments</a></span></p>
                                <select name="comment" id="comment">
                                    <option value="april" selected>April</option>
                                    <option value="april">May</option>
                                    <option value="april">Jun</option>
                                </select>

                               
                            </div>
                            <div className="people-results-one-user-body-right-bottom-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        I think the best solution is to kill our enemies first and then start our launch.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error libero in dignissimos sapiente voluptatem?
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad laboriosam repudiandae deserunt molestiae blanditiis nisi nobis labore quasi beatae sequi officiis, velit tempore aliquid.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, maxime dolor blanditiis suscipit vitae commodi beatae. Officiis, beatae?
                                    </p>
                                </li>
                            </ul>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>


   	
      );
   }
}

