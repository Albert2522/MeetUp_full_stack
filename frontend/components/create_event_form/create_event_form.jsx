import React from 'react';
import { Link, withRouter } from 'react-router';

class CreateEventForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      data: "2017-02-24 14:21:10.308703",
      author_id: this.props.currentUser.id,
      location: "SF",
      image_url: "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt000ddfxff646a/sgb5be2d848b/457187370.jpeg"
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  _handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign(this.state);
    this.props.createEvent(event).then(console.log("succesfully created"));
  }

  update(name) {
    return (e) => this.setState({ [name]: e.target.value})
  }


  render() {
    return (
      <div className="home_page">
        <form onSubmit={this._handleSubmit}>
          <label>Title
            <input type="text" value={this.state.title} onChange={this.update("title")}/>
          </label><br/><br/>
          <label>Description
            <input type="text" value={this.state.description} onChange={this.update("description")}/>
          </label>
          <label>
            <input type="submit" value="Create Event" />
          </label>
        </form>
      </div>
    );
  }


}

export default withRouter(CreateEventForm);
