import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';


export default class AllTeam extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
			 <div className="teams-results-all-teams">
            <div className="teams-results-all-teams-header">
                <div className="teams-results-all-teams-header-logout d-flex justify-content-between">
                    <p className="mb-0">Teams</p>
                    <p className="text-right align-middle"><a href="login">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Overview</h2>
                <p className="choose"><a href="MyTeam">My teams</a><span className="mx-2 divider"> I </span> <a href="AllTeam" className="active">All teams</a></p>
            </div>
            <div className="teams-results-all-teams-body">
 
                
                <div className="h3 d-flex">
                    <h3>All teams of our company</h3>
                    
                </div>
                

                <div className="inputs d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="search">
                            <i className="material-icons">search</i>
                            <input className="m-auto" type="text" placeholder="Search..." />
                        </div>
                        <div className="select d-none d-md-block">
                            <select name="category" id="category">
                                <option value="1" selected>All categories</option>
                                <option value="2" selected>All categories</option>
                                <option value="3" selected>All categories</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <a href="#" target="_blank" className="btn-custom-blue">Open on a new tab</a>
                    </div>
                </div>
               
                    <div className="row table-row">
                      <div className="col-sm-12">    
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <table className="table flex-table">
                              <thead>
                                <tr>
                                    <th className="spacer-left"></th>
                                    <th className="checkbox"></th>
                                    <th className="team-name">Name of team</th>
                                    <th className="team-lead-name d-none d-xl-flex">Team lead</th>
                                    <th className="team-size d-none d-lg-flex"><a href="#"><i className="material-icons align-middle">arrow_downward</i></a> Team size</th>
                                    <th className="team-index">Team index</th>
                                    <th className="team-lead-rating d-none d-md-flex">Team lead</th>
                                    <th className="team-view d-none d-sm-inline-block">View team</th>
                                    <th className="team-edit d-none d-sm-inline-block">Edit team</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="team-name">Martketing</td>
                                    <td className="team-lead-name d-none d-xl-flex">Jonas Walter</td>
                                    <td className="team-size d-none d-lg-flex">20</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="team-name">Sales</td>
                                    <td className="team-lead-name d-none d-xl-flex">Betric Smetlana</td>
                                    <td className="team-size d-none d-lg-flex">25</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>

                                <tr className="active">
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox" checked />
                                    </td>
                                    <td className="team-name">Frontend</td>
                                    <td className="team-lead-name d-none d-xl-flex">Jill Bowow</td>
                                    <td className="team-size d-none d-lg-flex">18</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-red">Bad</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Martketing</td>
                                    <td className="team-lead-name d-none d-xl-flex">Jonas Walter</td>
                                    <td className="team-size d-none d-lg-flex">20</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="#" className="link-disabled">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Sales</td>
                                    <td className="team-lead-name d-none d-xl-flex">Betric Smetlana</td>
                                    <td className="team-size d-none d-lg-flex">25</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="#" className="link-disabled">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr className="active">
                                    <td className="spacer-left"></td>
                                    <td className="checkbox active">
                                        <input type="checkbox" checked />
                                    </td>
                                    <td className="team-name">Frontend</td>
                                    <td className="team-lead-name d-none d-xl-flex">Jill Bowow</td>
                                    <td className="team-size d-none d-lg-flex">18</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-red">Bad</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Martketing</td>
                                    <td className="team-lead-name d-none d-xl-flex">Jonas Walter</td>
                                    <td className="team-size d-none d-lg-flex">20</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Sales</td>
                                    <td className="team-lead-name d-none d-xl-flex">Betric Smetlana</td>
                                    <td className="team-size d-none d-lg-flex">25</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Martketing</td>
                                    <td className="team-lead-name d-none d-xl-flex">Jonas Walter</td>
                                    <td className="team-size d-none d-lg-flex">20</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Sales</td>
                                    <td className="team-lead-name d-none d-xl-flex">Betric Smetlana</td>
                                    <td className="team-size d-none d-lg-flex">25</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Martketing</td>
                                    <td className="team-lead-name d-none d-xl-flex">Jonas Walter</td>
                                    <td className="team-size d-none d-lg-flex">20</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-green">Good</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td className="spacer-left"></td>
                                    <td className="checkbox">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="team-name">Sales</td>
                                    <td className="team-lead-name d-none d-xl-flex">Betric Smetlana</td>
                                    <td className="team-size d-none d-lg-flex">25</td>
                                    <td className="team-index">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-lead-rating d-none d-md-flex">
                                        <button className="btn-table btn-table-orange">Ok</button>
                                    </td>
                                    <td className="team-view d-none d-sm-inline-block">
                                        <a href="../teams-results-example/index.html">View team</a>
                                    </td>
                                    <td className="team-edit d-none d-sm-inline-block">
                                        <a href="../teams-setting/index.html">Edit team</a>
                                    </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>      
                      </div>
                    </div>
              
                <div className="table-footer bg-white d-flex justify-content-end align-items-center">
                    <p className="align-middle d-none d-md-block mr-4">Rows per page <span className="ml-2">20</span></p>

                    <p className="align-middle mx-5">page <span className="mx-1">1</span> of <span className="mx-1">1</span></p>
                    <div>
                        <a href="#"><i className="material-icons text-left align-middle disabled">keyboard_arrow_left</i></a>
                        <a href="#"><i className="material-icons text-right align-middle ml-2">keyboard_arrow_right</i></a>
                    </div>
                </div>

            </div>
    
        </div>
       
      );
   }
}

