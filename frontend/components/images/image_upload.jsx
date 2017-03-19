import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import {createImage, receiveImage, deleteImage} from '../../actions/images_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  images: state.images.images,
  errors: state.images.imageErrors
}};

const mapDispatchToProps = dispatch => ({
  createImage: (image) => dispatch(createImage(image)),
  receiveImage: (image) => dispatch(receiveImage(image)),
  deleteImage: (id) => dispatch(deleteImage(id))
});

class ImageUpploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: ""};
    this.upploadImage = this.upploadImage.bind(this);
    this.showUpploadedImages = this.showUpploadedImages.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  deleteImage(image, e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
    console.log(image);
    console.log(this);
    this.props.deleteImage(image.id);
  }

  showUpploadedImages() {
    let images = this.props.images;
    let keys = Object.keys(images);
    let arr = [ ];
    keys.forEach( (key) => arr.push(images[key]));
    return (
      <div>
        {arr.map( (image) => {
          let deleteImg = this.deleteImage.bind(this, image);
          return (
          <li key={image.url}>
            <img src={image.url} alt="Should be an Image"/>
            <button onClick={deleteImg}>Delete Image</button>
          </li>
        );})}
      </div>
    );
  }

  upploadImage(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(cloudinary_options, (errors, images) => {
      if (errors === null) {
        images.forEach((image) => {
          this.setState({url: image.url});
          this.props.createImage(this.state);
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.upploadImage}>
          Uppload Image
        </button>
        {this.showUpploadedImages()}
      </div>
    );
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageUpploadForm));
