import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { updateUser } from '../../actions/user_editing_action';
import { getCategories } from '../../actions/categories_actions';
import * as Selectors from '../../reducers/selectors.js';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  errors: state.userEdit.errors
}};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

class ChangePasswordForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {id: this.props.currentUser.id, email: this.props.currentUser.email, password: "", old_password: ""};
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  renderErrors() {
		if (this.props.formType === "login") {
			let a = "Password and Confirm Password don't match"
			let index = this.props.errors.indexOf(a);
			delete this.props.errors[index];
		}
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`} style={{color: "#E9573F"}}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  componentWillReceiveProps(newProps) {
  }

  _handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign(this.state);
    this.props.updateUser({user});
    console.log(this);
    this.forceUpdate();
  }

  update(name) {
    return (e) => this.setState({ [name]: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit} className="session-form">
        Please type your old password and new password
        <br/>
        {this.renderErrors()}
          <br/>
          <label className="session-form-label"> Old Password:<br />
            <input type="text"
              value={this.state.old_password}
              onChange={this.update("old_password")}
              className="login-input" />
          </label>
          <br/>
          <label className="session-form-label"> New Password<br />
            <input className="biginput span-100" type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input" />
          </label>
          <input
             type="submit" value="Change Password" />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChangePasswordForm));
