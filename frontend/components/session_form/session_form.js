import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		if (this.props.formType === "login") {
			this.state = { email: "", password: "" };
		}
		else {
			this.state = { email: "", password: "", password_confirm: "" };
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoUser = this.demoUser.bind(this);
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
		if (this.props.formType === "signup") {
			if (user.password === user.password_confirm) {
				this.props.processForm({user});
			} else {
				let a = "Password and Confirm Password don't match";
				this.props.errors.push(a);
				this.forceUpdate();
			}
		} else {
			this.props.processForm({user});
		}
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
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

	renderPassword() {
		if (this.props.formType !== "login") {
				return (
				<div>
					<label className="session-form-label"> Confirm Password:<br />
						<input className="biginput span-100" type="password"
							value={this.state.password_confirm}
							onChange={this.update("password_confirm")}
							className="login-input" />
					</label>
				</div>
			);
		}
	}

	demoUser() {
		if (this.props.formType === 'signup') {
			this.props.errors.push("Press Demo button again please");
			this.props.router.push('login');
		} else {
			console.log(this.state);
			console.log(this.props.errors);
			this.state = {email: "demoUser@gmail.com", password: "123456"};
			let user = this.state;
			console.log(this.state);
			this.props.processForm({user});
		}
	}

	render() {
		let password = this.props.formType === "login" ? "Password:" : "New Password"
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
							<label className="session-form-label"> {password}<br />
								<input className="biginput span-100" type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							{this.renderPassword()}
							<br/>
							<input
								 type="submit" value="Submit" />
					</form>
					<button onClick={this.demoUser}>Demo</button>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
