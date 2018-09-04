import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import { reducer as formReducer } from "redux-form";

import reducers from "./reducers/reducers";

import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import HomeContainer from "./containers/HomeContainer";
import PrivateRoute from "./components/PrivateRoute";

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";

const rootReducer = combineReducers({
	toggle: reducers,
	form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App1 extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<PrivateRoute exact path="/" component={HomeContainer} />
					<Route path="/login" component={LoginContainer} />
					<Route path="/signup" component={SignupContainer} />
				</div>
			</Provider>
		);
	}
}

render(
	<Router>
		<App1 />
	</Router>,
	document.getElementById("App")
);
