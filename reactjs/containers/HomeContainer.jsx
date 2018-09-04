import React from "react";
import { render } from "react-dom";

import { connect } from "react-redux";

import * as actions from "../actions/actions";

import HomeCard from "../components/HomeCard";

function mapStateToProps(state) {
	if (
		state.toggle.expenditureCategories == undefined ||
		state.toggle.expenditureTransactions == undefined ||
		state.toggle.incomeCategories == undefined ||
		state.toggle.incomeTransactions == undefined
	) {
		return { state: state.toggle };
	}
	let expenditureCategories = state.toggle.expenditureCategories.map(
		category => {
			category.transactions = state.toggle.expenditureTransactions.filter(
				transaction => transaction.category == category.id
			);
			category.amount = category.transactions
				.map(transaction => transaction.amount)
				.reduce((sum, value) => sum + value, 0);
			return category;
		}
	);
	let income = state.toggle.incomeTransactions
		.map(transaction => transaction.amount)
		.reduce((sum, value) => sum + value, 0);

	let expenditure = state.toggle.expenditureTransactions
		.map(transaction => transaction.amount)
		.reduce((sum, value) => sum + value, 0);

	let balance = {
		income: income,
		expenditure: expenditure,
		current: income - expenditure
	};

	const graphData = {
		labels: expenditureCategories.map(category => category.name),
		datasets: [
			{
				data: expenditureCategories.map(category =>
					(category.amount / expenditure * 100).toFixed(2)
				),
				backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
			}
		]
	};

	return { state: state.toggle, graphData: graphData, balance: balance };
}

@connect(mapStateToProps)
class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	day = () => {
		console.log("day");
		this.props.dispatch(actions.fetchExpenditureTransactions("day"));
		this.props.dispatch(actions.fetchIncomeTransactions("day"));
	};
	week = () => {
		console.log("week");
		this.props.dispatch(actions.fetchExpenditureTransactions("week"));
		this.props.dispatch(actions.fetchIncomeTransactions("week"));
	};
	month = () => {
		console.log("month");
		this.props.dispatch(actions.fetchExpenditureTransactions("month"));
		this.props.dispatch(actions.fetchIncomeTransactions("month"));
	};
	year = () => {
		console.log("year");
		this.props.dispatch(actions.fetchExpenditureTransactions("year"));
		this.props.dispatch(actions.fetchIncomeTransactions("year"));
	};

	componentDidMount() {
		let { dispatch, state } = this.props;
		if (
			!state.isLoadingIncomeTransactions &&
			state.incomeTransactions === undefined
		) {
			dispatch(actions.fetchIncomeTransactions());
		}
		if (
			!state.isLoadingExpenditureTransactions &&
			state.expenditureTransactions === undefined
		) {
			dispatch(actions.fetchExpenditureTransactions("year"));
		}
		if (
			!state.isLoadingExpenditureCategories &&
			state.expenditureCategories === undefined
		) {
			dispatch(actions.fetchIncomeCategories());
		}
		if (
			!state.isLoadingIncomeCategories &&
			state.incomeCategories === undefined
		) {
			dispatch(actions.fetchExpenditureCategories());
		}
	}

	renderLoading() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">Loading...</div>
				</div>
			</div>
		);
	}

	render() {
		let { dispatch, state } = this.props;
		if (
			(!state.isLoadingIncomeTransactions &&
				state.incomeTransactions === undefined) ||
			(!state.isLoadingExpenditureTransactions &&
				state.expenditureTransactions === undefined) ||
			(!state.isLoadingExpenditureCategories &&
				state.expenditureCategories === undefined) ||
			(!state.isLoadingIncomeCategories &&
				state.incomeCategories === undefined)
		) {
			return this.renderLoading();
		}
		if (this.props.graphData == undefined) {
			return this.renderLoading();
		}
		return (
			<div id="container" className="container">
				<HomeCard
					graphData={this.props.graphData}
					categories={this.props.state.expenditureCategories}
					balance={this.props.balance}
					day={this.day}
					week={this.week}
					month={this.month}
					year={this.year}
				/>
			</div>
		);
	}
}

export default HomeContainer;
