import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	linkBackToSignUp(formTypeLabel){
    if (formTypeLabel === "Log in"){
      return (
        <h4 className="session-form-title-subheading">Not registered with us yet? <Link to="/register">Sign up</Link></h4>
      );
    }
  }

  linkBackToLogIn(formTypeLabel){
    if (formTypeLabel === "Sign up"){
      return (
        <h4 className="session-form-title-subheading">Already a member? <Link to="/login">Log In</Link></h4>
      );
    }
  }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="main-container-session">
				<div className="session-form-container">
					<form onSubmit={this.handleSubmit} className="session-form">
						Welcome to Events!
						<br/>
						Please {this.props.formType} or {this.navLink()}
						{this.renderErrors()}
							<br/>
							<label className="session-form-label"> Email:<br />
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input" />
							</label>
							<br/>
							<label className="session-form-label"> Password:<br />
								<input className="biginput span-100" type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input
								 type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
