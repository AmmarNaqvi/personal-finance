import React from "react";
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import validate from "../validate/validate";

import { Link } from "react-router-dom";

const styles = theme => ({
	root: {
		flexGrow: 1,
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: "100%",
		height: "100%"
	},
	card: {},
	avatar: {
		width: 60,
		height: 60,
		margin: 10
	},
	button: {
		width: "100%",
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2
	},
	link: {
		textDecoration: "none"
	}
});

const renderTextField = ({
	input,
	label,
	meta: { touched, error },
	...custom
}) => (
	<TextField
		label={label}
		error={touched && error ? true : false}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
);

const LoginCard = props => {
	const classes = props.classes;

	const { handleSubmit, pristine, reset, submitting } = props;

	return (
		<form onSubmit={handleSubmit}>
			<Grid container className={classes.root}>
				<Grid container align="center" justify="center">
					<Grid item xs={10} md={5}>
						<Card className={classes.card}>
							<Grid container align="center" justify="center">
								<Avatar
									alt="Logo"
									src="/static/images/bank.png"
									className={classes.avatar}
								/>
							</Grid>
							<Grid container align="center" justify="center">
								<Grid item xs={10} md={7}>
									<Field
										name="username"
										component={renderTextField}
										type="text"
										label="Username"
										fullWidth
										margin="normal"
									/>
								</Grid>
								<Grid item xs={10} md={7}>
									<Field
										name="password"
										component={renderTextField}
										label="Password"
										type="password"
										autoComplete="current-password"
										fullWidth
										margin="normal"
									/>
								</Grid>
								<Grid item xs={10} md={7}>
									<Button
										className={classes.button}
										raised
										disabled={pristine || submitting}
										type="submit"
										color="primary"
									>
										Sign In
									</Button>
								</Grid>
								<Grid item xs={10} md={7}>
									<Link
										className={classes.link}
										to="/signup/"
									>
										<Button
											className={classes.button}
											onClick={props.toggle}
											color="primary"
										>
											Create Account
										</Button>
									</Link>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</form>
	);
};

export default reduxForm({
	// a unique name for the form
	form: "login",
	validate
})(withStyles(styles)(LoginCard));
