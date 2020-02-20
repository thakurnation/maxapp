import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  'assets/images/instagram/01.jpg',
  'assets/images/instagram/02.jpg',
  'assets/images/instagram/03.jpg',
  'assets/images/instagram/04.jpg',
  'assets/images/instagram/05.jpg',
  'assets/images/instagram/06.jpg',
  'assets/images/instagram/07.jpg',
  'assets/images/instagram/08.jpg',
  'assets/images/instagram/09.jpg',
  'assets/images/instagram/10.jpg',
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex	: 0,
      isOpen		: false,
      changeIndex	: false,
    };
  }
  
  componentWillReceiveProps(newProps) {
	  this.setState({ photoIndex: newProps.picIndex });
  }
  
  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button style={{position: 'absolute',border: 0}}  onClick={()=>this.props.openFancyBox(this.props.isOpen)}>
        </button>
        {this.props.isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.props.openFancyBox(this.props.isOpen)}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
