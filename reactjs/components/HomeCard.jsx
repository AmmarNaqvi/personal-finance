import React from "react";
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import DoughnutChart from "./DoughnutChart";
import NestedList from "./NestedList";
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
	card: {
		width: "100%",
		height: "100%"
	}
});

const HomeCard = props => {
	const classes = props.classes;
	return (
		<Grid container className={classes.root}>
			<Grid container align="center" justify="center">
				<Grid item xs={10} md={2}>
					<Card className={classes.card}>
						<NestedList data={props.categories} />
					</Card>
				</Grid>
				<Grid item xs={10} md={5}>
					<Card className={classes.card}>
						<DoughnutChart data={props.graphData} />
					</Card>
				</Grid>
				<Grid item xs={10} md={7}>
					<Card className={classes.card}>
						<Button fab color="primary" aria-label="add">
							Add
						</Button>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(HomeCard);
