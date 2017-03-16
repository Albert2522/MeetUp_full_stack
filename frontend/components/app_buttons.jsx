import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { logout } from '../actions/session_actions';
import { browserHistory } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  
  return ({currentUser: state.session.currentUser,
  state: state});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});


class AppButtons extends React.Component {
  constructor(props){
    super(props);
    this.logoutFn = this.logoutFn.bind(this);
    this.goToCreateEvent = this.goToCreateEvent.bind(this);
    this.searchForm = this.searchForm.bind(this);
    this.state = {};
    this.state['search'] = "search event..."
  }

  update(name) {
    return (e) => (this.state.search =  e.target.value)
  }

  _submitSearchForm (e) {
    e.preventDefault();
  }

  sessionLinks(){
    return(
      <div>
          {this.createEventAndInvite()}
        <div className="navbar-buttons-container">
          <Link to="/login" className="navbar-button">Log in</Link>
          <Link to="/signup" className="navbar-button red-button" id="signup">Sign up</Link>
        </div>
      </div>
    );
  }

  logoutFn(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/'));
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
        <button id="create-event" onClick={this.goToCreateEvent}>Create Event</button>
      </div>
    );
  }

  searchForm() {
    return (
      <div id="searchBar">
        <form onSubmit={this._submitSearchForm}>
          <input type="text" value={this.state.search} onChange={this.update('search')}/>
        </form>
      </div>
    );
  }

  greetAndLogout(){
    return (
      <div>
        {this.createEventAndInvite()}
        {this.searchForm()}
        <div className="navbar-buttons-container">
          <Link to="/user"><h4 className="session-form-label">{this.props.currentUser.email}</h4></Link>
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
