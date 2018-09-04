import React from "react";
import Button from "material-ui/Button";
import { Redirect } from "react-router";

class LinkButton extends React.Component {
	state = { redirect: false };

	handleClick = () => {
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect push to={this.props.to} />;
		}
		return (
			<Button
				onClick={this.handleClick}
				fab
				color="default"
				aria-label={this.props.label}
			>
				{this.props.text}
			</Button>
		);
	}
}

export default LinkButton;
