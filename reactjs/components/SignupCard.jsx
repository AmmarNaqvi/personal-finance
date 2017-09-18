import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";

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
	}
});

function SignupCard(props) {
	const classes = props.classes;

	return (
		<Grid container className={classes.root}>
			<Grid container align="center" justify="center">
				<Grid item xs={10} md={5}>
					<Card className={classes.card}>
						<CardContent>
							<Grid container align="center" justify="center">
								<Avatar
									alt="Logo"
									src="/static/images/bank.png"
									className={classes.avatar}
								/>
							</Grid>
							<Grid container align="center" justify="center">
								<Grid item xs={10} md={7}>
									<TextField
										label="Email"
										type="email"
										fullWidth
										margin="normal"
									/>
								</Grid>
								<Grid item xs={10} md={7}>
									<TextField
										label="Username"
										fullWidth
										margin="normal"
									/>
								</Grid>
								<Grid item xs={10} md={7}>
									<TextField
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
										color="primary"
									>
										Register
									</Button>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
}

SignupCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignupCard);
