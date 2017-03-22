import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { fetchCategories } from '../../actions/categories_actions';
import SampleEvents from '../SampleEvents/sample_event_container';
import UpcomingEvents from '../upcoming_events/upcoming_events.jsx';
import HowAppWorks from '../how_app_works/how_app_works.jsx';
import { allCategories } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  categories: allCategories(state.categoriesRed.categories)
}};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

class homePageForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  componentWillReceiveProps(newProps) {

  }

  renderSignUpOnCover(){
    if(!this.props.currentUser){
      return(
        <Link to="/login" className="categories-video-cover-btn">Sign Up</Link>
      );
    }
  }

  render() {
    if (this.props.categories.length !== 0) {
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
          {this.props.children}
          <div>
            <SampleEvents />
          </div>
          <div>
            <UpcomingEvents />
          </div>
          <div>
            {this.props.categories.map((category) => (
              <li key={`${category.title} - ${category.id}`}>
                <Link to={`/categories/${category.id}`}>
                {category.title}
                <img src={category.url} alt="Category Image"/>
                </Link>
              </li>
            ))}
          </div>
          <HowAppWorks />
        </div>
      );
    } else {
      return null;
    }
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(homePageForm);
