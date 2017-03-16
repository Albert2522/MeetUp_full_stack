import React from 'react';
import { Link, withRouter } from 'react-router';
import SampleEvents from '../SampleEvents/sample_event.jsx';
import UpcomingEvents from '../upcoming_events/upcoming_events.jsx';
import Categories from '../categories/categories.jsx';
import HowAppWorks from '../how_app_works/how_app_works.jsx';

class homePageForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSignUpOnCover(){
    if(!this.props.currentUser){
      return(
        <Link to="/login" className="categories-video-cover-btn">Sign Up</Link>
      );
    }
  }

  render() {
    return (
      <div className="home_page">
        <div>
          <div className="categories-video-cover">
            <h1>Find others who love what you love.</h1>
            {this.renderSignUpOnCover()}
          </div>
          <div className="categories-video-container">
            <video autoPlay loop muted width="100%" poster="https://s3.amazonaws.com/huddle-application-dev/static_video/videoposter.png">
              <source src="https://a248.e.akamai.net/secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
              type="video/mp4" />
            Your browser does not support the video embedded here
            </video>
          </div>
        </div>
        <div>
          <SampleEvents />
        </div>
        <div>
          <UpcomingEvents />
        </div>
        <div>
          <Categories />
        </div>
        <HowAppWorks />
      </div>
    );
  }


}

export default homePageForm;
