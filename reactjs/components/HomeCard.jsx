import React from "react";
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import DoughnutChart from "./DoughnutChart";
import NestedList from "./NestedList";
import LinkButton from "./LinkButton";

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
	},
	button: {
		width: "100%",
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	}
});

const HomeCard = (props, context) => {
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
						<Typography type="body1" align="center">
							Income: {props.balance.income} PKR
						</Typography>
						<Typography type="body1" align="center">
							Expenditure: {props.balance.expenditure} PKR
						</Typography>
						<Typography type="body1" align="center">
							Balance: {props.balance.current} PKR
						</Typography>
						<LinkButton text="+" label="subtract" to="/login" />
						<LinkButton text="-" label="subtract" to="/login" />
					</Card>
				</Grid>
				<Grid item xs={10} md={2}>
					<Card className={classes.card}>
						<Button
							raised
							color="default"
							className={classes.button}
							onClick={props.day}
						>
							Day
						</Button>
						<Button
							raised
							color="default"
							className={classes.button}
							onClick={props.week}
						>
							Week
						</Button>
						<Button
							raised
							color="default"
							className={classes.button}
							onClick={props.month}
						>
							Month
						</Button>
						<Button
							raised
							color="default"
							className={classes.button}
							onClick={props.year}
						>
							Year
						</Button>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(HomeCard);
