
import React from 'react';
import ReactDOM from 'react-dom';;
import { Link, withRouter } from 'react-router';
import ImageUpploadForm from '../images/image_upload';
import {allImages} from '../../reducers/selectors';
import InputMoment from 'input-moment';
import moment from 'moment';
import merge from 'lodash/merge';
require('input-moment/src/less/input-moment.less');

class CreateEventForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      data: moment(),
      author_id: this.props.currentUser.id,
      location: "SF",
      image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt000ddfxff646a/sgb5be2d848b/457187370.jpeg",
      category_ids: [],
      images: [],
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    if(!this.props.categories.length) {
      this.props.fetchCategories();
    }
    this.props.createFakeEvent({});
  }

  componentWillReceiveProps(newProps) {
    if (newProps.event.id) {
      setTimeout(() => this.props.router.push(`/user/${currentUser.id}`), 3000);
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    let images;
    if (this.imageUploader !== null) {
      images = allImages(this.imageUploader.state.storeState.images.images);
    }
    const event = merge({}, this.state);
    if ( images && images.length !== 0) {
      event.image_url =  images[0].url;
      images.forEach( (image) => event.images.push(image.id));
    }
    event.data = event.data.format();
    //FILL IMAGE_RELATIONSHIPS TABLES WITH EVENT ID AND GROUP ID. PROBLEM WITH CLOUDINARY ON HEROKU
    this.props.createEvent(event);
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
				{this.props.eventErrors.map((error, i) => (
					<li key={`error-${i}`} style={{color: "#E9573F"}}>
						{error}
					</li>
				))}
			</ul>
		);
  }

  createEventMessage() {
    if (this.props.event.id) {
      return (
      <div style={{color: 'green'}}>
        Event was succesfully created<br/>
        Now you will be redirected on Home page..
      </div>
    );
    } else {
      return null;
    }
  }

  handleChange(data) {
    this.setState({ data });
  }

  handleSave() {
    console.log('saved', this.state.data.format('llll'));
  }

  render() {
    return (
      <div className="home_page">
        <form onSubmit={this._handleSubmit}>
          {this.createEventMessage()}
          {this.renderErrors()}
          <label>Title
            <input type="text" value={this.state.title} onChange={this.update("title")}/>
          </label><br/><br/>
          <label>Description
            <input type="text" value={this.state.description} onChange={this.update("description")}/>
          </label>
          <label>
            <ImageUpploadForm ref={(imageUploader) => {this.imageUploader = imageUploader;}} {...this.props}/>
          </label>
          <div className="app">
              <div className="input">
                  <input
                    type="text"
                    value={this.state.data.format('llll')}
                    readOnly
                  />
              </div>
              <InputMoment
                moment={this.state.data}
                onChange={this.handleChange}
                onSave={this.handleSave}
                />
          </div>
          <div>
            {this.props.categories.map((category) => (
              <div key={`${category.title} - ${category.id}`}>
                {category.title}
                <input  type="checkbox" value={category.id} onChange={this.update("category_ids")}/>
              </div>
            ))}
          </div>
          <label>
            <input type="submit" value="Create Event" />
          </label>
        </form>
      </div>
    );
  }


}

export default withRouter(CreateEventForm);
