import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import Chart from "react-google-charts";
import { getRecommondations, getRecommondationItems } from '../../API/Papaya';
import { getBlogByCategory, getCategories, getBlogs } from '../../API/Blogs';
const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var mealIdentifier = null;


const data = [
  ["Task", "Hours per Day"],
  [" ", 25],
  [" ", 43],
  [" ", 32] 
];
const options = {
  title: " ",
  pieHole: 0.5,
  is3D: false,
  slices: [
   {
     color: "#57A773"
   },
   {
     color: "#F8DAEA"
   },
   {
     color: "#E83F6F"
   }
  ],
  legend: { position: "none" },
         hAxis: { textPosition: 'none' },
         pieSliceText: 'none',
};



class Home extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		  hideOnStart			: 	true,
		  loader				: 	true,
		  rangeValue			: 	500,
		  activeTab				: 	'Overview',
		  openCalory			: 	false,
		  sendEmail				: 	false,
		  ingredients			: 	true,
		  instructions			: 	true,
		  heroBreakfast			: 	false,
		  heroBreakfastVal		: 	'Breakfast',
		  heroBreakfastOther	: 	false,
		  heroBreakfastValOther	: 	'Breakfast',
		  whatever				: 	false,
		  showModal	 			: 	false,
		  whateverVal			: 	'Whatever',
		  meals					: 	['Whatever'],
		  itemsArray			: 	[],
		  itemModalData			: 	[],
		  nutriCalory			: 	0,
		  fatContent			: 	0,
		  carbohydrateContent	: 	0,
		  cholesterolContent	: 	0,
		  sodiumContent			: 	0,
		  proteinContent		: 	0,
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
	
		<div className="results-body">
            <div className="results-body-left">
                <div className="people">
                    <div className="card-header bg-white d-flex justify-content-between align-items-center">
                        <h3 className="m-0">People <span>33</span></h3>
                        <span className="add-btn"></span>
                       
                    </div>
                    <ul className="list-group-flush p-0 m-0">
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-01.png" alt="#" />
                            <p className="name m-0 flex-fill">Ollie Stewart</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-green text-center">Great</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-02.png" alt="#" />
                            <p className="name m-0 flex-fill">Madge Casey</p >
                            <p className="prof m-0 text-start d-none d-xl-block">Junior Python Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-03.png" alt="#" />
                            <p className="name m-0 flex-fill">Gilbert Mack</p >
                            <p className="prof m-0 text-start d-none d-xl-block">Senior Python Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center active">
                            <img className="rounded-circle" src="../../../assets/img/p-04.png" alt="#"/>
                            <p className="name m-0 flex-fill">Jesse Gregory</p >
                            <p className="prof m-0 text-start d-none d-xl-block">Junior Javascript Developer</p>
                            <div className="d-flex align-items-center"><a className="mr-1 active-link" href="../people-results-one-user/index.html"><p className="">Open profile</p><p className="">in full screen</p></a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-05.png" alt="#"/>
                            <p className="name m-0 flex-fill">Annie Kelly</p >
                            <p className="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-06.png" alt="#"/>
                            <p className="name m-0 flex-fill">Edwin Love</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-07.png" alt="#"/>
                            <p className="name m-0 flex-fill">Floyd Roberson</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" className="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-08.png" alt="#"/>
                            <p className="name m-0 flex-fill">Kate Lindsey</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" className="btn-custom btn-custom-green text-center">Good</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-09.png" alt="#"/>
                            <p className="name m-0 flex-fill">Ernest Wright</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Bootstrap Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-orange text-center">Ok</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-10.png" alt="#"/>
                            <p className="name m-0 flex-fill">Jeff Copeland</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" className="btn-custom btn-custom-orange text-center">Ok</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-10.png" alt="#"/>
                            <p className="name m-0 flex-fill">Jeff Copeland</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Software Architect</p>
                            <div><a href="#" className="btn-custom btn-custom-orange text-center">Ok</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-11.png" alt="#"/>
                            <p className="name m-0 flex-fill">Alan Yates</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Junior Python Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-12.png" alt="#"/>
                            <p className="name m-0 flex-fill">Jose Thornton</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-11.png" alt="#"/>
                            <p className="name m-0 flex-fill">Alan Yates</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Junior Python Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                        <li className="list-group-item d-flex align-items-center">
                            <img className="rounded-circle" src="../../../assets/img/p-12.png" alt="#"/>
                            <p className="name m-0 flex-fill">Jose Thornton</p>
                            <p className="prof m-0 text-start d-none d-xl-block">Senior Javascript Developer</p>
                            <div><a href="#" className="btn-custom btn-custom-red text-center">Bad</a></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="results-body-right">
                <div className="results-body-right-top">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div>
                            <h3 className="text-truncate mr-2"><span>Jess Gregory's</span> development</h3>
                            <p className="choose"><a href="#">Weeks</a><span className="mx-2"> I </span> <span className="active"><a href="#">Months</a></span> </p>
                           </div>
                           <a className="share" href="#">Average<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
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

                <div className="results-body-right-bottom">
                        <div className="right-container">
                            <div className="results-body-right-bottom-header">
                                <p className="choose text-truncate mr-2"><span className="active"><a href="#">Improvement Ideas</a></span><span className="mx-2"> I </span><a href="#">Compliments</a></p>
                                <select name="comment" id="comment">
                                    <option value="april" selected>April</option>
                                    <option value="april">May</option>
                                    <option value="april">Jun</option>
                                </select>

                               
                            </div>
                            <div className="results-body-right-bottom-body">
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
   
   	
      );
   }
}
export default Home;
