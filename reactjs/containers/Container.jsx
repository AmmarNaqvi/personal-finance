import React from "react";
import { render } from "react-dom";

import { connect } from "react-redux";

import * as actions from "../actions/actions";
import CategoryForm from "../components/CategoryForm";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import HomeCard from "../components/HomeCard";

@connect(state => ({
	toggleLoginSignup: state.toggle.toggleLoginSignup,
	loggedIn: state.toggle.loggedIn
}))
export default class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	login = values => {
		let { dispatch } = this.props;
		dispatch(actions.login());
		// const formData = new FormData();
		// formData.append("name", values.name);
		// formData.append("icon", values.icon);

		// fetch("/api/expenditure_categories/", {
		// 	method: "POST",
		// 	body: formData
		// });
		console.log(values);
	};

	signup = values => {
		let { dispatch } = this.props;
		dispatch(actions.signup());
		console.log(values);
	};

	toggle = values => {
		let { dispatch } = this.props;
		dispatch(actions.toggleLoginSignup());
	};

	render() {
		let toggleLoginSignup = this.props.toggleLoginSignup;
		let loggedIn = this.props.loggedIn;
		if (loggedIn) {
			return (
				<div id="container" className="container">
					<HomeCard />
				</div>
			);
		}
		if (toggleLoginSignup) {
			return (
				<div id="container" className="container">
					<SignupCard onSubmit={this.signup} toggle={this.toggle} />
				</div>
			);
		} else {
			return (
				<div id="container" className="container">
					<LoginCard onSubmit={this.login} toggle={this.toggle} />
				</div>
			);
		}
	}
}
