import React from "react";
import { render } from "react-dom";

import { connect } from "react-redux";

import * as actions from "../actions/actions";

import LoginCard from "../components/LoginCard";
import { Redirect } from "react-router-dom";
import fakeAuth from "../components/fakeAuth";

@connect(state => ({
	loggedIn: state.toggle.loggedIn,
	redirectToReferrer: state.toggle.redirectToReferrer
}))
class LoginContainer extends React.Component {
	state = {
		redirectToReferrer: false
	};
	login = values => {
		// let { dispatch } = this.props;
		// dispatch(actions.login());
		// console.log(values);
		fakeAuth.authenticate(() => {
			this.setState({ redirectToReferrer: true });
		});
	};

	render() {
		const { from } = this.props.location.state || {
			from: { pathname: "/" }
		};

		const redirectToReferrer = this.state.redirectToReferrer;

		console.log("props: " + this.props.redirectToReferrer);
		console.log("state: " + this.state.redirectToReferrer);

		if (redirectToReferrer) {
			return <Redirect to={from} />;
		}

		return (
			<div id="container" className="container">
				<LoginCard onSubmit={this.login} />
			</div>
		);
	}
}
export default LoginContainer;
