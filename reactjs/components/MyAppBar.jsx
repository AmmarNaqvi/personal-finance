import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = theme => ({
	root: {
		marginTop: theme.spacing.unit,
		width: "100%"
	}
});

function MyAppBar(props) {
	const classes = props.classes;
	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Typography type="title" color="inherit">
						Personal Finance
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

MyAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyAppBar);
