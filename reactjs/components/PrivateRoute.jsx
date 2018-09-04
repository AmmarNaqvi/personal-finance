import React from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import fakeAuth from "./fakeAuth";

const mapStateToProps = (state, ownProps) => {
	return {
		redirectToReferrer: state.toggle.redirectToReferrer
	};
};

const PrivateRoute = ({ component: Component, ...rest , state}) => (
	<Route
		{...rest}
		render={props =>
			fakeAuth.isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location }
					}}
				/>
			)}
	/>
);

export default connect(mapStateToProps)(PrivateRoute);
