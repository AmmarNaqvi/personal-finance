import React from "react";

import { connect } from "react-redux";

import * as formActions from "../actions/formActions";
import CategoryForm from "../components/CategoryForm";

@connect(state => ({
	counters: state
}))
export default class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	submit = values => {
		// print the form values to the console
		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("icon", values.icon);

		fetch("/api/expenditure_categories/", {
			method: "POST",
			body: formData
		});

		console.log(values);
	};

	render() {
		return (
			<div className="container">
				<br />
				<br />
				<div className="row col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							Add Expenditure Category
						</div>
						<div className="panel-body">
							<CategoryForm onSubmit={this.submit} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
