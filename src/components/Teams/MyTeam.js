import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';


class MyTeam extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
			 <div className="teams-results-favourites">
            <div className="teams-results-favourites-header">
                <div className="teams-results-favourites-header-logout d-flex justify-content-between">
                    <p className="subtitle mb-0">Teams</p>
                    <p className="text-right align-middle"><a href="login">Logout <i className="material-icons align-middle">exit_to_app</i></a></p>
                </div>
                <h2 className="mt-1 align-middle">Overview</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="choose"><span className="active"><a href="MyTeam">My teams</a></span> <span className="mx-1">|</span>
                        <a href="AllTeam">All teams</a></p>
                    <a href="#" className="btn-custom-blue">Remove team from favourites</a>
                </div>
            </div>

            <div className="teams-results-favourites-body">

                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                        <div className="graph-card bg-white graph-team-marketing">
                            <div className="graph-card-header">
                                <h3>Team Marketing</h3>
                                <p className="choose"><span className="active"><a href="#">Team</a></span> <span className="mx-1">|</span> <a href="#">Team lead</a></p>
                            </div>
                            <div className="graph-card-body">
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 30%;"></div>
                                    <div className="bar-info">WK 1</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 38%;"></div>
                                    <div className="bar-info">WK 2</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 45%;"></div>
                                    <div className="bar-info">WK 3</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 49%;"></div>
                                    <div className="bar-info">WK 4</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                    <div className="bar-info">WK 5</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 60%;"></div>
                                    <div className="bar-info">WK 6</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 55%;"></div>
                                    <div className="bar-info">WK 7</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                    <div className="bar-info">WK 8</div>
                                </div>
                            </div>
                            <div className="graph-card-footer d-flex justify-content-center align-items-center">
                               
                                <a href="../teams-results-example/index.html" className="btn-custom-blue">View Team</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                        <div className="graph-card bg-white graph-team-marketing">
                            <div className="graph-card-header">
                                <h3>Team Sales</h3>
                                <p className="choose"><span className="active"><a href="#">Team</a></span> <span className="mx-1">|</span> <a href="#">Team lead</a></p>
                            </div>
                            <div className="graph-card-body">
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 30%;"></div>
                                    <div className="bar-info">WK 1</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 38%;"></div>
                                    <div className="bar-info">WK 2</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 45%;"></div>
                                    <div className="bar-info">WK 3</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 49%;"></div>
                                    <div className="bar-info">WK 4</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                    <div className="bar-info">WK 5</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 60%;"></div>
                                    <div className="bar-info">WK 6</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 55%;"></div>
                                    <div className="bar-info">WK 7</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                    <div className="bar-info">WK 8</div>
                                </div>
                            </div>
                            <div className="graph-card-footer d-flex justify-content-center align-items-center">
                               
                                <a href="../teams-results-example/index.html" className="btn-custom-blue">View Team</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                        <div className="graph-card bg-white graph-team-marketing">
                            <div className="graph-card-header">
                                <h3>Team UX/UI</h3>
                                <p className="choose"><span className="active"><a href="#">Team</a></span> <span className="mx-1">|</span> <a href="#">Team lead</a></p>
                            </div>
                            <div className="graph-card-body">
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 30%;"></div>
                                    <div className="bar-info">WK 1</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 38%;"></div>
                                    <div className="bar-info">WK 2</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 45%;"></div>
                                    <div className="bar-info">WK 3</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 49%;"></div>
                                    <div className="bar-info">WK 4</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                    <div className="bar-info">WK 5</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 60%;"></div>
                                    <div className="bar-info">WK 6</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 55%;"></div>
                                    <div className="bar-info">WK 7</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                    <div className="bar-info">WK 8</div>
                                </div>
                            </div>
                            <div className="graph-card-footer d-flex justify-content-center align-items-center">
                                
                                <a href="../teams-results-example/index.html" className="btn-custom-blue">View Team</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                        <div className="graph-card bg-white graph-team-marketing">
                            <div className="graph-card-header">
                                <h3>Team Sales</h3>
                                <p className="choose"><span className="active"><a href="#">Team</a></span> <span className="mx-1">|</span> <a href="#">Team lead</a></p>
                            </div>
                            <div className="graph-card-body">
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 30%;"></div>
                                    <div className="bar-info">WK 1</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 38%;"></div>
                                    <div className="bar-info">WK 2</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 45%;"></div>
                                    <div className="bar-info">WK 3</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 49%;"></div>
                                    <div className="bar-info">WK 4</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                    <div className="bar-info">WK 5</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 60%;"></div>
                                    <div className="bar-info">WK 6</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 55%;"></div>
                                    <div className="bar-info">WK 7</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                    <div className="bar-info">WK 8</div>
                                </div>
                            </div>
                            <div className="graph-card-footer d-flex justify-content-center align-items-center">
                              
                                <a href="../teams-results-example/index.html" className="btn-custom-blue">View Team</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                        <div className="graph-card bg-white graph-team-marketing">
                            <div className="graph-card-header">
                                <h3>Team Management</h3>
                                <p className="choose"><span className="active"><a href="#">Team</a></span> <span className="mx-1">|</span> <a href="#">Team lead</a></p>
                            </div>
                            <div className="graph-card-body">
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 30%;"></div>
                                    <div className="bar-info">WK 1</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 38%;"></div>
                                    <div className="bar-info">WK 2</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 45%;"></div>
                                    <div className="bar-info">WK 3</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 49%;"></div>
                                    <div className="bar-info">WK 4</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                    <div className="bar-info">WK 5</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 60%;"></div>
                                    <div className="bar-info">WK 6</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 55%;"></div>
                                    <div className="bar-info">WK 7</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                    <div className="bar-info">WK 8</div>
                                </div>
                            </div>
                            <div className="graph-card-footer d-flex justify-content-center align-items-center">
                               
                                <a href="../teams-results-example/index.html" className="btn-custom-blue">View Team</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 mb-5">
                        <div className="graph-card bg-white graph-team-marketing">
                            <div className="graph-card-header">
                                <h3>Team Cleaning</h3>
                                <p className="choose"><span className="active"><a href="#">Team</a></span> <span className="mx-1">|</span> <a href="#">Team lead</a></p>
                            </div>
                            <div className="graph-card-body">
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 30%;"></div>
                                    <div className="bar-info">WK 1</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-red" styles="height: 38%;"></div>
                                    <div className="bar-info">WK 2</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 45%;"></div>
                                    <div className="bar-info">WK 3</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 49%;"></div>
                                    <div className="bar-info">WK 4</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                    <div className="bar-info">WK 5</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 60%;"></div>
                                    <div className="bar-info">WK 6</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-green" styles="height: 55%;"></div>
                                    <div className="bar-info">WK 7</div>
                                </div>
                                <div className="bar">
                                    <div className="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                    <div className="bar-info">WK 8</div>
                                </div>
                            </div>
                            <div className="graph-card-footer d-flex justify-content-center align-items-center">
                               
                                <a href="../teams-results-example/index.html" className="btn-custom-blue">View Team</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
       
      );
   }
}
export default MyTeam;
