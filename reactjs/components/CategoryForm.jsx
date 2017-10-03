import React from "react";
import { reduxForm } from "redux-form";

import TextInput from "./form_components/TextInput";
import ImageInput from "./form_components/ImageInput";

class CategoryForm extends React.Component {
	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;

		return (
			<form onSubmit={handleSubmit} className="form-horizontal">
				<TextInput labelText="Name" />
				<ImageInput labelText="Icon" />
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<button
							disabled={pristine || submitting}
							type="submit"
							className="btn btn-primary"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		);
	}
}

CategoryForm = reduxForm({
	// a unique name for the form
	form: "contact"
})(CategoryForm);

export default CategoryForm;
