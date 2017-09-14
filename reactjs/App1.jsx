import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import * as reducers from "./reducers";

import Container from "./containers/Container";

let finalCreateStore = compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
let reducer = combineReducers({
	form: formReducer
});
let store = finalCreateStore(reducer);

class App1 extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container />
			</Provider>
		);
	}
}

render(<App1 />, document.getElementById("App"));
