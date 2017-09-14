import React from "react";
import { Field } from "redux-form";

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
	input: { value: omitValue, onChange, onBlur, ...inputProps },
	meta: omitMeta,
	...props
}) => (
	<input
		onChange={adaptFileEventToValue(onChange)}
		onBlur={adaptFileEventToValue(onBlur)}
		type="file"
		{...inputProps}
		{...props}
	/>
);

export default class ImageInput extends React.Component {
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
						component={FileInput}
						type="file"
						accept="image/*"
						className="form-control"
						name="icon"
					/>
				</div>
			</div>
		);
	}
}
