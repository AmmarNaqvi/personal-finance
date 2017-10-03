import React from "react";
import { render } from "react-dom";

import { connect } from "react-redux";

import * as actions from "../actions/actions";

import HomeCard from "../components/HomeCard";

function mapStateToProps(state) {
	if (
		state.toggle.expenditureCategories == undefined ||
		state.toggle.expenditureTransactions == undefined
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
	let totalAmount = state.toggle.expenditureTransactions
		.map(transaction => transaction.amount)
		.reduce((sum, value) => sum + value, 0);
	const graphData = {
		labels: expenditureCategories.map(category => category.name),
		datasets: [
			{
				data: expenditureCategories.map(
					category => category.amount / totalAmount * 100
				),
				backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
			}
		]
	};

	return { state: state.toggle, graphData: graphData };
}

@connect(mapStateToProps)
class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
	}

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
			dispatch(actions.fetchExpenditureTransactions());
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
		console.log(state);
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
				/>
			</div>
		);
	}
}

export default HomeContainer;
