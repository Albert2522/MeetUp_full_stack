import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { fetchCategory } from '../../actions/categories_actions';
import SampleEvents from '../SampleEvents/sample_event_container';
import UpcomingEvents from '../upcoming_events/upcoming_events.jsx';
import HowAppWorks from '../how_app_works/how_app_works.jsx';
import { allCategories } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  categories: allCategories(state.categoriesRed.categories),
  category: state.categoriesRed.category,
  categoryId: ownProps.params.categoryId
}};

const mapDispatchToProps = dispatch => ({
  fetchCategory: (id) => dispatch(fetchCategory(id))
});

class CategoryShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.categoryId);
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    if (this.props.category.id) {
      return (
        <div className="home_page">
          <div>
            Popular Groups:
            {this.props.category.groups.map((group) => (
              <li key={`${group.name} - ${group.id}`}>
                <Link to={`/groups/${group.id}`}>
                {group.name}
                <img src={group.image_url}/>
                </Link>
              </li>
            ))}
          </div>
          <div>
            Popular Events:
            {this.props.category.events.map((event) => (
              <li key={`${event.name} - ${event.id}`}>
                <Link to={`events/${event.id}`}>
                {event.name}
                <img src={event.image_url}/>
                </Link>
              </li>
            ))}
          </div>
          <button onClick={(e) => this.props.history.goBack()}>Back</button>
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShowPage);
