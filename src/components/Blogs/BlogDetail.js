import React, { Component } from 'react';
import { getBlogBySlug, getBlogByCategory, getCategories } from '../../API/Blogs';
const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
class Blogs extends Component{
		
	constructor(props) {
		super(props);
		this.state = {
		  loader		: 	true,
		  activeCateDrop: 	false,
		  activeClass	: 	'',
		  blogDetail	: 	{},
		  blogsArray	: 	[],
		  categoryArray	: 	[],
		};
	}
	
	componentDidMount(){
		
		
		
		let slug = this.props.match.params.id;
		document.title = slug+" | Papaya"
		if(slug){
			getBlogBySlug(slug).then(data => {
				
				if(data.length >0){
					this.setState({ blogDetail : data[0] });
				}			
				getBlogByCategory(this.state.blogDetail.categories[0]).then(resData => {
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
				
			})
			.catch(function(error) {
				this.setState({ loader : false });
				console.warn(error)
			})
		}
		
		getCategories().then(data => {
			if(data.length >0){
				this.setState({ categoryArray : data, activeClass : data[0].id});
			}else{
				this.setState({ loader : false });
			}
		})
		.catch(function(error) {
			this.setState({ loader : false });
			console.warn(error)
		})	
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
			   
				
					<section className="blog-details-info d-none d-md-flex">
					  <div className="container">
						<div className="row align-items-center">
						  <div className="col-md-8  blog-tittle">
							<h1>{ Object.keys(this.state.blogDetail).length ? this.state.blogDetail.title.rendered : null }</h1>
						  </div>
						  <div className="col-md-4 blog-user-info">
							<hr className="hr-line" />
							<div className="media align-items-center">
							  <img className="mr-3" src="../../../assets/images/user.jpg" alt="User" />
							  <div className="media-body">
								<h5 className="m-0">{ Object.keys(this.state.blogDetail).length == 0 ? null : this.state.blogDetail._embedded['author'][0].name  }</h5>
								<p>Last updated  { mlist[new Date(this.state.blogDetail.modified).getMonth()] } {new Date(this.state.blogDetail.modified).getDay()}, {new Date(this.state.blogDetail .modified).getFullYear()}</p>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					</section>
					<section className="blog-details">
					   <div className="container-fluid">
						 <div className="row m-0">
						   <div className="col-md-8 p-0">
							 <img className="blog-img " src={ Object.keys(this.state.blogDetail).length == 0 ? '../../../assets/images/noImage.png' : this.state.blogDetail._embedded['wp:featuredmedia'] ? this.state.blogDetail._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url : '../../../assets/images/noImage.png' } />
						   </div>
						   <div className="col-md-4 p-0 ">
							<div className="blog-sidebar">
							 <div className="row">
							   <div className="col-12 slect-blog-cat-drop">
								  <div className=" drop-select-option">
									<h3 className="m-0"><a href="javascript:void(0);"  onClick={()=> { this.setState({ activeCateDrop : !this.state.activeCateDrop }) } } >Choose article category<span><i className="fa fa-chevron-down" aria-hidden="true"></i></span></a></h3>
									
									<ul id="heroBreakfast" className={ "dropwn-slect "+(this.state.activeCateDrop ? null : "collapse") } >
										{ this.state.categoryArray && this.state.categoryArray.length ? 
											this.state.categoryArray.map(( item, key ) =>
												item.id !=1 ? (
												  <li className="" key={key}>
													<a className={ this.state.activeClass == item.id ? "active" : null }   href={ "/c/"+item.slug } >{ item.name }</a>
												  </li>
												): null
											):null
										}
									</ul>
									
								  </div>
							   </div>
							   <div className="col-12 mt-4 d-md-none  blog-tittle">
								  <h1>Planning ahead for healthy snaking</h1>
								</div>

								<div className="col-md-4 mt-2 d-md-none blog-user-info">        
								  <div className="media align-items-center">
									<img className="mr-3" src="../../../assets/images/user.jpg" alt="User" />
									<div className="media-body">
									  <h5 className="m-0">Media heading</h5>
									  <p>Last updated March 15, 2019</p>
									</div>
								  </div>

								</div>
								<div className="col-12 related-artical d-none d-md-block">
								  <h2>Related Articles</h2>

								{ this.state.blogsArray && this.state.blogsArray.length ? 
									this.state.blogsArray.map(( item, key ) =>
									key<5 ?
									(
										<a href={ "/p/"+item.slug }>
										  <div className="media row m-0 align-items-center" key={key}>
											<img className="mr-3" src={ item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url : '../../../assets/images/noImage.png' } alt="" />
											<div className="media-body">                  
											  <p>{ item.title.rendered }</p>
											</div>
										  </div>
										</a>
								  ) : null):null
								}

								</div>
							 </div>
							 </div>
						   </div>
						 </div>
						 <div className="row ml-0 mr-0 mt-5">
						   <div className="col-lg-7 col-12 m-auto blog-details-bottom" dangerouslySetInnerHTML={{__html: Object.keys(this.state.blogDetail).length ? (this.state.blogDetail.content.rendered) : 'Please wait!' }} >
							 
							


						   </div>
						 </div>
					   </div>
					  
					</section>
			</div>);
   }
}
export default Blogs;


