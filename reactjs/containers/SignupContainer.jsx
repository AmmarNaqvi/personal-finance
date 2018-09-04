import React from "react";
import { render } from "react-dom";

import { connect } from "react-redux";

import * as actions from "../actions/actions";

import SignupCard from "../components/SignupCard";

@connect(state => ({
	loggedIn: state.toggle.loggedIn
}))
class SignupContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	signup = values => {
		let { dispatch } = this.props;
		dispatch(actions.signup());
		console.log(values);
	};

	render() {
		return (
			<div id="container" className="container">
				<SignupCard onSubmit={this.signup} />
			</div>
		);
	}
}

export default SignupContainer;
