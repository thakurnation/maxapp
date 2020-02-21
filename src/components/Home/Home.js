import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';



class Home extends Component{
	
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
		   
    <div class="people-results-key-people">
        <div class="people-results-key-people-header">
            <div class="people-results-key-people-header-logout d-flex justify-content-between">
                <p class="mb-0">People</p>
                <p class="text-right align-middle"><a href="login">Logout</a> <i
                        class="material-icons align-middle">exit_to_app</i></p>
            </div>
            <h2 class="mt-1 align-middle">Results</h2>
            <div class="d-flex justify-content-between align-items-center">
                <p class="choose"><span><a href="/" class="active">My key people</a></span><span class="mx-2 divider"> I </span><a href="AllPeople">All people</a></p>
                <button>Remove from my key people</button>
            </div>
            
        </div>

        <div class="people-results-key-people-body">
            <div class="people-results-key-people-body-left">
                <div class="people">
                    <div class="card-header bg-white d-flex justify-content-between align-items-center">
                        <h3 class="m-0">People <span>33</span></h3>
                        <span class="add-btn"></span>
                        
                    </div>
                    <ul class="list-group-flush p-0 m-0">
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-01.png" alt="#"/>
                            <p class="name m-0 flex-fill">Ollie Stewart</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div class="text-right"><a href="#" class="btn-custom btn-custom-green text-center">Great</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-02.png" alt="#"/>
                            <p class="name m-0 flex-fill">Madge Casey</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Junior Python Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-03.png" alt="#"/>
                            <p class="name m-0 flex-fill">Gilbert Mack</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Senior Python Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center active">
                            <img class="rounded-circle" src="../../../assets/img/p-04.png" alt="#"/>
                            <p class="name m-0 flex-fill">Jesse Gregory</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Junior Javascript Developer</p>
                            <div class="d-flex align-items-center"><a class="mr-1 active-link" href="PeopleProfile"><p class="">Open profile</p><p class="">in full screen</p></a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-05.png" alt="#"/>
                            <p class="name m-0 flex-fill">Annie Kelly</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-06.png" alt="#"/>
                            <p class="name m-0 flex-fill">Edwin Love</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-07.png" alt="#"/>
                            <p class="name m-0 flex-fill">Floyd Roberson</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" class="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-08.png" alt="#"/>
                            <p class="name m-0 flex-fill">Kate Lindsey</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" class="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-09.png" alt="#"/>
                            <p class="name m-0 flex-fill">Ernest Wright</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Bootstrap Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-orange text-center">Ok</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-10.png" alt="#"/>
                            <p class="name m-0 flex-fill">Jeff Copeland</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" class="btn-custom btn-custom-orange text-center">Ok</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-10.png" alt="#"/>
                            <p class="name m-0 flex-fill">Jeff Copeland</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" class="btn-custom btn-custom-orange text-center">Ok</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-11.png" alt="#"/>
                            <p class="name m-0 flex-fill">Alan Yates</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Junior Python Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-12.png" alt="#"/>
                            <p class="name m-0 flex-fill">Jose Thornton</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-11.png" alt="#"/>
                            <p class="name m-0 flex-fill">Alan Yates</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Junior Python Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <img class="rounded-circle" src="../../../assets/img/p-12.png" alt="#"/>
                            <p class="name m-0 flex-fill">Jose Thornton</p>
                            <p class="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" class="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="people-results-key-people-body-right">
                <div class="people-results-key-people-body-right-top">
                    <div class="graph-card bg-white graph-team-marketing">
                        <div class="graph-card-header d-flex justify-content-between">
                           <div>
                            <h3 class="text-truncate mr-2"><span>Jess Gregory's</span> development</h3>
                            <p class="choose"><a href="#">Weeks</a><span class="mx-2"> I </span> <span class="active"><a href="#">Months</a></span> </p>
                           </div>
                           <a class="share" href="#">Average<i class="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div class="graph-card-body">
                            <div class="bar d-none d-xl-block">
                                <div class="bar-fill bar-fill-red" styles="height: 40%;"></div>
                                <div class="bar-info">JAN</div>
                            </div>
                            <div class="bar d-none d-lg-block">
                                <div class="bar-fill bar-fill-red" styles="height: 35%;"></div>
                                <div class="bar-info">FEB</div>
                            </div>
                            <div class="bar d-none d-lg-block">
                                <div class="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                <div class="bar-info">MAR</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div class="bar-info">APR</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-green" styles="height: 72%;"></div>
                                <div class="bar-info">MAY</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-orange" styles="height: 48%;"></div>
                                <div class="bar-info">JUN</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-green" styles="height: 65%;"></div>
                                <div class="bar-info">JUL</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div class="bar-info">AUG</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-green" styles="height: 76%;"></div>
                                <div class="bar-info">SEP</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-green" styles="height: 70%;"></div>
                                <div class="bar-info">OCT</div>
                            </div>
                            <div class="bar">
                                <div class="bar-fill bar-fill-green" styles="height: 68%;"></div>
                                <div class="bar-info">NOV</div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div class="people-results-key-people-body-right-bottom">
                        <div class="right-container">
                            <div class="people-results-key-people-body-right-bottom-header">
                                <p class="choose text-truncate mr-2"><span class="active"><a href="#">Improvement Ideas</a></span><span class="mx-2"> I </span><a href="#">Compliments</a></p>
                                <select name="comment" id="comment">
                                    <option value="april" selected>April</option>
                                    <option value="april">May</option>
                                    <option value="april">Jun</option>
                                </select>

                                
                            </div>
                            <div class="people-results-key-people-body-right-bottom-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <p class="m-0 p-0">
                                        I think the best solution is to kill our enemies first and then start our launch.
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <p class="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <p class="m-0 p-0">
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <p class="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid error libero in dignissimos sapiente voluptatem?
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <p class="m-0 p-0">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad laboriosam repudiandae deserunt molestiae blanditiis nisi nobis labore quasi beatae sequi officiis, velit tempore aliquid.
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <p class="m-0 p-0">
                                        Lorem, ipsum dolor.
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <p class="m-0 p-0">
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
export default Home;
