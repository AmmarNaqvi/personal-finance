import React from "react";
import { Field } from "redux-form";

export default class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="form-group">
				<label className="control-label col-sm-2">
					{this.props.labelText}
				</label>
				<div className="col-sm-8">
					<Field
						component="input"
						type="text"
						className="form-control"
						name="name"
					/>
				</div>
			</div>
		);
	}
}
