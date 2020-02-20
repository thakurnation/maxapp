import React, { Component } from 'react';
import { getBlogs, getCategories, getBlogByCategory, getCategoryBySlug } from '../../API/Blogs';
const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var activeMobile = '';
class Blogs extends Component{
		
	constructor(props) {
		super(props);
		this.state = {
		  activeClass	: 	'',
		  activeMobile	: 	'',
		  mobileDrop	: 	false,
		  loader		: 	true,
		  blogsArray	: 	[],
		  categoryArray	: 	[],
		};
	}
	
	componentDidMount(){
		
		let slug = this.props.match.params.id;

		if(slug !=undefined){
			document.title = slug+" Articles | Papaya";
		}else{
			document.title = "The Blog | Papaya";

		}
		
		let currentCateid	=	'';
		getCategories().then(data => {
			if(data.length >0){
				this.setState({ categoryArray : data });
				if(slug !=undefined){
					getCategoryBySlug(slug).then(cateData => {
						currentCateid = cateData[0].id;
						this.setState({ activeClass : currentCateid });
						this._Blogs(currentCateid);
					})
					
				}else{
					currentCateid = data[0].id;
					this.setState({ activeClass : 'all' });
					this._Blogs(currentCateid);
				}

			}else{
				this.setState({ loader : false });
			}
		})
		.catch(function(error) {
			this.setState({ loader : false });
			console.warn(error)
		})
		
	}
	
	_Blogs=(cateId)=>{
		getBlogByCategory(cateId).then(resData => {
			console.log(resData)
			if(resData.length >0){
				this.setState({ blogsArray : resData });
			}
			this.setState({ loader : false });
		})
		.catch(function(error) {
			this.setState({ loader : false });
			console.warn(error)
		})
	}
	
	changeCategory=(val)=>{
		this.setState({ loader : true ,activeClass : val});
		this._Blogs(val);
	}
	
   render(){
      return(<div>
      
				{ this.state.loader ? (
					<div className="fullscreen-spinner  justify-content-center align-items-center">
						<div className="spinner-grow m-auto " role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
					
				) : null }
			   
				<section className="fresh-bites-block inner-slider p-0">
				  <div className="container-fluid p-0">
					<img src="../.../../assets/images/FreshBitesPic-2.jpg" className="full_bg" />
					<div className="row">
					  <div className="col-12 caption_text">
						<h2>Bites: the Blog </h2>
						<p>A health life starts with the mind. Get inspired by small bites of actionable advice and stories from people you like.</p>
					  </div>      
					</div>
				  </div>
				</section>

				<section className="articles-block">
				  <div className="container p-0">
					<div className="row m-0 justify-content-center">
						 <div className="col-md-12 col-lg-10 p-0 filter-tabs">  

						   <a href="javascript:void(0);" className="nav-tabs-dropdown" onClick={ ()=> this.setState( { mobileDrop : !this.state.mobileDrop  } ) } > { activeMobile }</a>            

							 <ul className={"nav nav-tabs blog-tabs-filter "+(this.state.mobileDrop ? "d-block" : null) } id="blogfilterTabs" role="tablist">
									<li className="" >
										<a className={ this.state.activeClass == 'all' ? "active" : null }   href={ "/bites" } >All</a>
									</li>
								{ this.state.categoryArray && this.state.categoryArray.length ? 
									this.state.categoryArray.map(( item, key ) =>{
										if(item.slug == this.props.match.params.id && this.props.match.params.id != undefined ){
											 activeMobile = item.name ; 
										}else{
											if(key == 0){
												activeMobile = item.name;
											}
										}
										return (item.id !=1 ? (
										  <li className="" key={key}>
											<a className={ this.state.activeClass == item.id ? "active" : null }   href={ "/c/"+item.slug } >{ item.name }</a>
										  </li>
										): null)
									
									}):null
									
								}              
								</ul>
						  </div>


					   <div className="col-md-12 col-lg-10 p-0 tab-content clearfix">
							 <div className="tab-pane active" id="Honest">                  
								<div className="col-12">
								
								{ this.state.blogsArray && this.state.blogsArray.length ? 
									this.state.blogsArray.map(( item, key ) =>
									(
										<div className="row pt-5 pb-5 articles_list" key={key}>
										  <div className="col-md-6 p-0 thumb-img">
											<a href={ "/p/"+item.slug }>
											<h2 className="pl-4 d-md-none">{ item.title.rendered }</h2>
											<img src={ item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url : '../../../assets/images/noImage.png' } className="" />                
											</a>
										  </div>
										  <div className="col-md-6 p-0 articles-info">
											<a href={ "/p/"+item.slug }>
												<h2 className="pl-4 d-none d-md-flex">{ item.title.rendered }</h2>
											</a>
											<p className="pl-4" dangerouslySetInnerHTML={{__html: (item.excerpt.rendered).split('&hellip')[0]+'...'}}  ></p>
											<div className="row m-0">
											  <div className="col p-0 pl-md-4 pr-0"><span>{ mlist[new Date(item.modified).getMonth()] } {new Date(item.modified).getDate()}, {new Date(item.modified).getFullYear()}</span></div>
											  <div className="col p-0 pl-md-4 pr-0 text-right"><span> <a href={ "/p/"+item.slug } className="read-more">Read more <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span></div>
											</div>
										  </div>
										</div>
									)) : (
										<div className="row pt-5 pb-5 articles_list">
										  <div className="col-md-12 p-0 thumb-img text-center" >
											No post found !
										  </div>
										</div>
									) 
								}
		
								<div className="row">
								  <hr className="col hr-line"/>
								</div>
								
								
								
							   </div>
							 </div>
      
					 </div>
					 </div>

				  </div>
				</section>
			</div>);
   }
}
export default Blogs;


