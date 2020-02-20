import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';


class ManageTeam extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
		<div className="teams-settings">
            <div className="teams-settings-header">
                <div className="teams-settings-header-logout d-flex justify-content-between">
                    <p className="subtitle back mb-0 d-flex align-items-center"><a href="#">Teams</a></p>
                    <p className="text-right align-middle"><a href="#">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Manage teams</h2>
            </div>
            
            <div className="teams-settings-body">

                

                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="team-name d-flex align-items-center justify-content-start text-truncate">
                            <label className="mb-0" for="team-name ">Select team</label>
                        <div className="d-none d-xl-block">
                            <a href="#" className="btn-custom-outline active">Software</a>
                            <a href="#" className="btn-custom-outline">Sales</a>
                            <a href="#" className="btn-custom-outline">Management</a>
                        </div>
                        <select className="d-block d-xl-none team-select" name="teams" id="teams">
                            <option value="software" selected>Software</option>
                            <option value="software">Sales</option>
                            <option value="software">Management</option>
                        </select>
                        </div>
                       
                        <div className="team-card bg-white team-card-member">
                            <div className="team-card-header d-flex justify-content-between align-items-center">
                                <p className="m-0">Team member</p>
                                <a href="#">Add new</a>
                            </div>

                          
                            <div className="team-table team-table-member">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="category d-flex align-items-center justify-content-start">
                            <label className="mb-0" for="category">Category</label>
                            <div className="category-input">
                                <input type="text" placeholder="Software" />
                                <i className="material-icons">done</i>
                            </div>
                        </div>
                       
                        <div className="team-card bg-white team-card-lead">
                            <div className="team-card-header d-flex justify-content-between align-items-center">
                                <p className="m-0">Team lead</p>
                                <a href="#">Add new</a>
                            </div>

                          
                            <div className="team-table team-table-lead">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell" className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell" className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell" className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-lg-table-cell" className="d-none d-lg-table-cell">Database Engeneer</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                       
                        <div className="team-card bg-white team-card-admin">
                            <div className="team-card-header d-flex justify-content-between align-items-center">
                                <p className="m-0">View / Admin right</p>
                                <a href="#">Add new</a>
                            </div>

                           
                            <div className="team-table team-table-admin">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">CEO</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>Franz Liebknecht</td>
                                            <td className="d-none d-xl-table-cell">Lawyer</td>
                                            <td className="d-none d-md-table-cell">View only</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>John Walter</td>
                                            <td className="d-none d-xl-table-cell">Database engeneer</td>
                                            <td className="d-none d-md-table-cell">Admin rights</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="spacer"></td>
                                            <td>Franz Liebknecht</td>
                                            <td className="d-none d-xl-table-cell">Lawyer</td>
                                            <td className="d-none d-md-table-cell">View only</td>
                                            <td>
                                                <a href="#">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

               
                <div className="row w-100">
                    <div className="col-12">
                        <div className="card-confirm bg-white d-flex justify-content-between align-items-center">

                            <div className="pr-5">
                                <div className="radio-input-container div d-flex align-items-center mb-4">
                                   <div className="radio-checkbox">
                                       <input type="checkbox" name="checkbox-one" id="checkbox-one"/>
                                        <label for="checkbox-one">
                                            <span></span>
                                        </label>
                                   </div>
                                    <p className="m-0 ml-3 align-middle">Everyone in team have to give each other regularly feedback</p>
                                </div>
    
                                <div className="radio-input-container div d-flex align-items-center">
                                    <div className="radio-checkbox">
                                        <input type="checkbox" name="checkbox-one" id="checkbox-two" />
                                         <label for="checkbox-two">
                                             <span></span>
                                         </label>
                                    </div>
                                    <p className="m-0 ml-3 align-middle">Everyone in team have to give regularly feedback how teamwork in total could be improved</p>
                                </div>
                            </div>

                            <div className="feedback-buttons d-flex align-items-center justify-content-end">
                                <a href="" className="feedback-buttons-settings d-flex align-items-center justify-content-center mr-4"><i className="material-icons">layers</i>Settings log</a>
                                <a href="" className="feedback-buttons-delete d-flex align-items-center justify-content-center"><i className="material-icons">delete_forever</i> Delete user</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     
      );
   }
}
export default ManageTeam;