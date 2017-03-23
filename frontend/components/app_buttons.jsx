import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { logout } from '../actions/session_actions';
import { fetchSearchResult } from '../actions/search_actions';
import { browserHistory } from 'react-router';

const mapStateToProps = (state, ownProps) => {

  return ({
    currentUser: state.session.currentUser,
    state: state,
    result: state.searchRed.result
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  fetchSearchResult: (data) => dispatch(fetchSearchResult(data))
});


class AppButtons extends React.Component {
  constructor(props){
    super(props);
    this.logoutFn = this.logoutFn.bind(this);
    this.goToCreateEvent = this.goToCreateEvent.bind(this);
    this.searchForm = this.searchForm.bind(this);
    this.greetAndLogout = this.greetAndLogout.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this._submitSearchForm = this._submitSearchForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.state = {
      search: "find event..."
    };
  }

  componentWillReceiveProps(newProps) {

  }

  update(name) {
    return (e) => this.setState({ [name]: e.target.value})
  }

  _submitSearchForm (e) {
    e.preventDefault();
    let search = this.state.search;
    this.props.fetchSearchResult(search);
    this.props.router.push('/search_result')
  }

  sessionLinks(){
    return(
      <div>
          {this.searchForm()}
          {this.createEventAndInvite()}
        <div className="navbar-buttons-container">
          <Link to="/login" id="login" className="navbar-highlighted-button">Log in</Link>
          <Link to="/signup" className="navbar-button red-button" id="signup">Sign up</Link>
        </div>
      </div>
    );
  }

  logoutFn(e) {
    e.preventDefault();
    this.props.logout();
    this.props.router.push('/')
  }

  goToCreateEvent() {
    if (!this.props.currentUser) {
      this.props.router.push('login');
      return;
    }
    this.props.router.push('create_event');
  }

  createEventAndInvite () {
    return (
      <div>
        <button id="create-event" className="navbar-buttons-container navbar-highlighted-button" refresh="true" onClick={this.goToCreateEvent}>Create Event</button>
      </div>
    );
  }

  searchForm() {
    return (
      <div id="searchBar">
        <form onSubmit={this._submitSearchForm}>
          <input className="rounded" type="text" value={this.state.search} onChange={this.update('search')} onClick={this.clearForm}/>
        </form>
      </div>
    );
  }

  clearForm(e) {
    e.preventDefault();
    if (this.state.search === "find event...") {
      this.setState({search: ""});
    }
  }

  greetAndLogout(){
    return (
      <div>
        {this.createEventAndInvite()}
        {this.searchForm()}
        <div className="navbar-buttons-container">
          <Link to={`/user/${this.props.currentUser.id}`}><h4 className="session-form-label">{this.props.currentUser.email}</h4></Link>
          <button id="logout" onClick={this.logoutFn}>Log Out</button>
        </div>
    </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.greetAndLogout();
    } else {
      return this.sessionLinks();
    }
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppButtons));
