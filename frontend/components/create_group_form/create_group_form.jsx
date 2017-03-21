import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { receiveGroup, createGroup, fetchGroup } from '../../actions/groups_actions';
import { createRelationship } from '../../actions/images_actions';
import { getCategories } from '../../actions/categories_actions';
import * as Selectors from '../../reducers/selectors.js';
import ImageUpploadForm from '../images/image_upload';
import {allImages} from '../../reducers/selectors';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  categories: Selectors.arrayOfCategories(state),
  groupErrors: state.groupsRed.groupErrors,
  groups: Selectors.allGroups(state.groupsRed.groups),
  group: state.groupsRed.group
}};

const mapDispatchToProps = dispatch => ({
  receiveGroup: group => dispatch(receiveGroup(group)),
  createGroup: group => dispatch(createGroup(group)),
  fetchGroup: id => dispatch(fetchGroup(id)),
  createRelationship: img_rel => dispatch(createRelationship(img_rel))
});

class CreateGroupForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      author_id: this.props.currentUser.id,
      image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt000ddfxff646a/sgb5be2d848b/457187370.jpeg",
      category_id: "",
      images: []
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(newProps) {
    if (newProps.group.id) {
      setTimeout(() => this.props.router.push(`/user/${this.props.currentUser.id}`), 3000);
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    let images;
    if (this.imageUploader !== null) {
      images = allImages(this.imageUploader.state.storeState.images.images);
    }
    const group = Object.assign(this.state);
    if ( images && images.length !== 0) {
      group.image_url =  images[0].url;
      images.forEach( (image) => group.images.push(image.id));
    }
    //FILL IMAGE_RELATIONSHIPS TABLES WITH EVENT ID AND GROUP ID. PROBLEM WITH CLOUDINARY ON HEROKU
    this.props.createGroup(group);
  }

  update(name) {
    return (e) => this.setState({ [name]: e.target.value})
  }

  renderErrors() {
    return(
			<ul>
				{this.props.groupErrors.map((error, i) => (
					<li key={`error-${i}`} style={{color: "#E9573F"}}>
						{error}
					</li>
				))}
			</ul>
		);
  }

  createGroupMessage() {
    if (this.props.group.id) {
      return (
      <div style={{color: 'green'}}>
        Group {this.props.group.name} was succesfully created<br/>
      Now you will be redirected on User page..
      </div>
    );
  } else {
    return null;
  }
  }

  render() {
    return (
      <div className="home_page">
        <form onSubmit={this._handleSubmit}>
          {this.createGroupMessage()}
          {this.renderErrors()}
          <label>Name
            <input type="text" value={this.state.name} onChange={this.update("name")}/>
          </label><br/><br/>
          <label>Description
            <input type="text" value={this.state.description} onChange={this.update("description")}/>
          </label>
          <label>
            <ImageUpploadForm ref={(imageUploader) => {this.imageUploader = imageUploader;}} {...this.props}/>
          </label>
          <label>
            <input type="submit" value="Create Group" />
          </label>
        </form>
        {this.props.chidren}
      </div>
    );
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateGroupForm));
