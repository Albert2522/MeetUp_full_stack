
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
      group_id: ""
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
      if (newProps.event.group_id !== "") {
        this.props.router.push(`/groups/${newProps.event.group_id}`)
      } else {
        this.props.router.push(`/events/${newProps.event.id}`);
      }
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
    if (this.props.location.query.groupId) {
      event.group_id = this.props.location.query.groupId;
    }
    debugger;
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


  handleChange(data) {
    this.setState({ data });
  }

  handleSave() {
    console.log('saved', this.state.data.format('llll'));
  }



  render() {
    return (
      <div className="group-form-wrapper">
        <form className="group-form" onSubmit={this._handleSubmit}>
          {this.renderErrors()}
          <label className="group-form-labels">Event title:
            <br />
            <input type="text" value={this.state.title} onChange={this.update("title")}/>
          </label><br/><br/>
        <label className="group-form-labels">Location:
            <br />
            <input type="text" placeholder="Cities Only Please" value={this.state.location} onChange={this.update("location")}/>
          </label><br/><br/>
          <label className="group-form-labels">Description
            <br />
            <textarea value={this.state.description} onChange={this.update("description")}/>
          </label>
            <br /><br />
          <label className="group-form-labels">
            <ImageUpploadForm ref={(imageUploader) => {this.imageUploader = imageUploader;}} {...this.props}/>
          </label>
          <br /><br />
          Choose date and time : <i className="fa fa-calendar" aria-hidden="true"></i>
          <br /><br />
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
          <br /><br />
          <div>
            {this.props.categories.map((category) => (
              <div className="checkbox" key={`${category.title} - ${category.id}`}>
                <span>{category.title}</span>
                <input  type="checkbox" value={category.id} onChange={this.update("category_ids")}/>
              </div>
            ))}
          </div>
          <br /><br />
          <label>
            <input type="submit" value="Create Event" />
          </label>
        </form>
      </div>
    );
  }


}

export default withRouter(CreateEventForm);
