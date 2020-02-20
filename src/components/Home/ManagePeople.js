import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';



export default class ManagePeople extends Component{
	
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
	    <div className="people-settings">
            <div className="people-settings-header">
                <div className="people-settings-header-logout d-flex justify-content-between ">
                    <p className="mb-0">Settings</p>
                    <p className="text-right align-middle"><a href="login">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Manage people's settings</h2>
               
                <div className="people-settings-header-search border rounded">
                    <div className="input-group h-100">
                        <i className="material-icons">search</i>
                        
                        <input className="m-auto" type="text" placeholder="Search..." />
                      </div>
                </div>
            </div>
            <div className="people-settings-body d-flex flex-column">
               <div className="row h-100">
                 
                   <div className="col-6">
                       <div className="feedback-from card h-100 card-body bg- white p-0" style={{ maxHeight:'211px'}}>
                            <div className="feedback-from-header d-flex justify-content-between">
                                <h3 className="text-truncate">People who give feedback to Peter</h3>
                                <a className="align-middle" href="#">Add new</a>
                            </div>
                            <div className="feedback-from-body h-100 d-glex flex-column">
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">John Walter</div>
                                    <div className="feedback-from-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Every 2nd week</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">Franz Liebcneth</div>
                                    <div className="feedback-from-item-title d-none d-md-block">Lawyer</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Weekly</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">Rosa Luxemburg</div>
                                    <div className="feedback-from-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Once per month</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">John Walter</div>
                                    <div className="feedback-from-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Every 2nd week</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">Franz Liebcneth</div>
                                    <div className="feedback-from-item-title d-none d-md-block">Lawyer</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Weekly</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">Rosa Luxemburg</div>
                                    <div className="feedback-from-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Once per month</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">John Walter</div>
                                    <div className="feedback-from-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Every 2nd week</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">Franz Liebcneth</div>
                                    <div className="feedback-from-item-title d-none d-md-block">Lawyer</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Weekly</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">Rosa Luxemburg</div>
                                    <div className="feedback-from-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Once per month</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-from-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-from-item-name">John Walter</div>
                                    <div className="feedback-from-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-from-item-time d-none d-xl-block">Every 2nd week</div>
                                    <a href="#" className="feedback-from-item-delete text-right">Delete</a>
                                </div>
                            </div>
                       </div>
                   </div>
                   
                   <div className="col-6">
                    <div className="feedback-to card card-body h-100 bg- white p-0" style={{ maxHeight:'211px'}}>
                        <div className="feedback-to-header d-flex justify-content-between">
                            <h3 className="text-truncate">People to who Peter gives feedback</h3>
                            <a className="align-middle" href="#">Add new</a>
                        </div>
                        <div className="feedback-to-body d-glex flex-column">
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">John Walter</div>
                                <div className="feedback-to-item-title d-none d-md-block">CEO</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Every 2nd week</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">Franz Liebcneth</div>
                                <div className="feedback-to-item-title d-none d-md-block">Lawyer</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Weekly</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">Rosa Luxemburg</div>
                                <div className="feedback-to-item-title d-none d-md-block">CEO</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Once per month</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">John Walter</div>
                                <div className="feedback-to-item-title d-none d-md-block">CEO</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Every 2nd week</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">Franz Liebcneth</div>
                                <div className="feedback-to-item-title d-none d-md-block">Lawyer</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Weekly</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">Rosa Luxemburg</div>
                                <div className="feedback-to-item-title d-none d-md-block">CEO</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Once per month</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">John Walter</div>
                                <div className="feedback-to-item-title d-none d-md-block">CEO</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Every 2nd week</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">Franz Liebcneth</div>
                                <div className="feedback-to-item-title d-none d-md-block">Lawyer</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Weekly</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">Rosa Luxemburg</div>
                                <div className="feedback-to-item-title d-none d-md-block">CEO</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Once per month</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                            <div className="feedback-to-item d-flex justify-content-between align-items-center">
                                <div className="feedback-to-item-name">John Walter</div>
                                <div className="feedback-to-item-title d-none d-md-block">CEO</div>
                                <div className="feedback-to-item-time d-none d-xl-block">Every 2nd week</div>
                                <a href="#" className="feedback-to-item-delete text-right">Delete</a>
                            </div>
                        </div>
                   </div>
                   </div>
               </div>
               <div className="row my-4">
                  
                    <div className="col-6">
                        <div className="feedback-boss card card-body h-100 bg- white p-0">
                            <div className="feedback-boss-header d-flex justify-content-between align-items-center">
                                <h3 className="text-truncate">Bosses who Peter gives feedback</h3>
                                <a className="align-middle" href="#">Add new</a>
                            </div>
                            <div className="feedback-boss-body d-glex flex-column">
                                <div className="feedback-boss-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-boss-item-name">John Walter</div>
                                    <div className="feedback-boss-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-boss-item-time d-none d-xl-block">Every 2nd week</div>
                                    <a href="#" className="feedback-boss-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-boss-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-boss-item-name">Franz Liebcneth</div>
                                    <div className="feedback-boss-item-title d-none d-md-block">Lawyer</div>
                                    <div className="feedback-boss-item-time d-none d-xl-block">Weekly</div>
                                    <a href="#" className="feedback-boss-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-boss-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-boss-item-name">Rosa Luxemburg</div>
                                    <div className="feedback-boss-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-boss-item-time d-none d-xl-block">Once per month</div>
                                    <a href="#" className="feedback-boss-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-boss-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-boss-item-name">John Walter</div>
                                    <div className="feedback-boss-item-title d-none d-md-block">CEO</div>
                                    <div className="feedback-boss-item-time d-none d-xl-block">Every 2nd week</div>
                                    <a href="#" className="feedback-boss-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-boss-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-boss-item-name">Franz Liebcneth</div>
                                    <div className="feedback-boss-item-title d-none d-md-block">Lawyer</div>
                                    <div className="feedback-boss-item-time d-none d-xl-block">Weekly</div>
                                    <a href="#" className="feedback-boss-item-delete text-right">Delete</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-6">
                        
                        <div className="feedback-team card card-body h-100 bg- white p-0">
                            <div className="feedback-team-header d-flex justify-content-between">
                                <h3 className="text-truncate">Peter is memeber of team</h3>
                                <a className="align-middle" href="#">Add new</a>
                            </div>
                            <div className="feedback-team-body d-glex flex-column">
                                <div className="feedback-team-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-team-item-name">Javascript Development</div>
                                    <div className="feedback-team-item-title d-none d-lg-block">Basic Member</div>
                                    <p className="d-none d-none d-xl-block">-</p>
                                    <a href="#" className="feedback-team-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-team-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-team-item-name">Web team</div>
                                    <div className="feedback-team-item-title d-none d-lg-block">Lead lead</div>
                                    <p className="d-none d-none d-xl-block">-</p>
                                    <a href="#" className="feedback-team-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-team-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-team-item-name">Javascript Development</div>
                                    <div className="feedback-team-item-title d-none d-lg-block">Basic Member</div>
                                    <p className="d-none d-none d-xl-block">-</p>
                                    <a href="#" className="feedback-team-item-delete text-right">Delete</a>
                                </div>
                                <div className="feedback-team-item d-flex justify-content-between align-items-center">
                                    <div className="feedback-team-item-name">Web team</div>
                                    <div className="feedback-team-item-title d-none d-lg-block">Lead lead</div>
                                    <p className="d-none d-none d-xl-block">-</p>
                                    <a href="#" className="feedback-team-item-delete text-right">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>              
                </div>
                <div className="row">
                        <div className="col-6">
                           
                            <div className="feedback-team card card-body h-100 bg- white p-0">
                                <div className="feedback-team-header d-flex justify-content-between">
                                    <h3 className="text-truncate">Admin rights to Peter's profile</h3>
                                    <a className="align-middle" href="#">Add new</a>
                                </div>
                                <div className="feedback-team-body d-glex flex-column">
                                    <div className="feedback-admin-item d-flex justify-content-between align-items-center">
                                        <div className="feedback-admin-item-name">John Walter</div>
                                        <div className="feedback-admin-item-title d-none d-md-block">CEO</div>
                                        <div className="feedback-admin-item-time d-none d-xl-block">Adming rights</div>
                                        <a href="#" className="feedback-admin-item-delete text-right">Delete</a>
                                    </div>
                                    <div className="feedback-admin-item d-flex justify-content-between align-items-center">
                                        <div className="feedback-admin-item-name">Franz Liebcneth</div>
                                        <div className="feedback-admin-item-title d-none d-md-block">Lawyer</div>
                                        <div className="feedback-admin-item-time d-none d-xl-block">View rights only</div>
                                        <a href="#" className="feedback-admin-item-delete text-right">Delete</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-6">
                        <div className="feedback-buttons d-flex align-items-center justify-content-end">
                            <a href="" className="feedback-buttons-settings d-flex align-items-center justify-content-center"><i className="material-icons">layers</i>Settings log</a>
                            <a href="" className="feedback-buttons-delete d-flex align-items-center justify-content-center"><i className="material-icons">delete_forever</i> Delete user</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
   	
      );
   }
}

