import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { receiveGroup, createGroup, fetchGroup, createFakeGroup } from '../../actions/groups_actions';
import { createRelationship } from '../../actions/images_actions';
import {fetchCategories } from '../../actions/categories_actions';
import { fetchUser } from '../../actions/user_editing_actions';
import * as Selectors from '../../reducers/selectors.js';
import ImageUpploadForm from '../images/image_upload';
import {allImages} from '../../reducers/selectors';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  categories: Selectors.allCategories(state.categoriesRed.categories),
  groupErrors: state.groupsRed.groupErrors,
  groups: Selectors.allGroups(state.groupsRed.groups),
  group: state.groupsRed.group
}};

const mapDispatchToProps = dispatch => ({
  receiveGroup: group => dispatch(receiveGroup(group)),
  createGroup: group => dispatch(createGroup(group)),
  fetchGroup: id => dispatch(fetchGroup(id)),
  createRelationship: img_rel => dispatch(createRelationship(img_rel)),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  createFakeGroup: (group) => dispatch(createFakeGroup(group))
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
      category_ids: [],
      images: []
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.categories.length) {
      this.props.fetchCategories();
    }
    this.props.createFakeGroup({});
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
    this.props.fetchUser(this.props.currentUser.id);
  }

  update(name) {
    if (name !== "category_ids") {
      return (e) => this.setState({ [name]: e.target.value})
    } else {
      return ((e) => {
        let id = e.currentTarget.value;
        let arr = this.state.category_ids;
        if (arr.includes(id)) {
          arr.splice(arr.indexOf(id), 1);
        } else {
          arr.push(e.target.value);
        }
        this.setState({[name]: arr});
       });
    }
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
          <div>
            {this.props.categories.map((category) => (
              <div key={`${category.title} - ${category.id}`}>
                {category.title}
                <input  type="checkbox" value={category.id} onChange={this.update("category_ids")}/>
              </div>
            ))}
          </div>
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
