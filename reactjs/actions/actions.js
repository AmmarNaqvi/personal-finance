export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const FETCH_INCOME_TRANSACTIONS = "FETCH_INCOME_TRANSACTIONS";
export const FETCH_EXPENDITURE_TRANSACTIONS = "FETCH_EXPENDITURE_TRANSACTIONS";
export const FETCH_INCOME_CATEGORIES = "FETCH_INCOME_CATEGORIES";
export const FETCH_EXPENDITURE_CATEGORIES = "FETCH_EXPENDITURE_CATEGORIES";
export const RECEIVE_INCOME_TRANSACTIONS = "RECEIVE_INCOME_TRANSACTIONS";
export const RECEIVE_EXPENDITURE_TRANSACTIONS =
	"RECEIVE_EXPENDITURE_TRANSACTIONS";
export const RECEIVE_INCOME_CATEGORIES = "RECEIVE_INCOME_CATEGORIES";
export const RECEIVE_EXPENDITURE_CATEGORIES = "RECEIVE_EXPENDITURE_CATEGORIES";
export function login() {
	return {
		type: LOGIN
	};
}
export function signup() {
	return {
		type: SIGNUP
	};
}
export function fetchIncomeTransactions(interval) {
	return function(dispatch) {
		dispatch({
			type: FETCH_INCOME_TRANSACTIONS
		});
		fetch(
			"/api/income_transactions/?format=json&user_id=1&interval=" +
				interval
		)
			.then(response => response.json())
			.then(json => dispatch(receiveIncomeTransactions(json)));
	};
}
export function fetchExpenditureTransactions(interval) {
	return function(dispatch) {
		dispatch({
			type: FETCH_EXPENDITURE_TRANSACTIONS
		});
		fetch(
			"/api/expenditure_transactions/?format=json&user_id=1&interval=" +
				interval
		)
			.then(response => response.json())
			.then(json => dispatch(receiveExpenditureTransactions(json)));
	};
}
export function fetchIncomeCategories() {
	return function(dispatch) {
		dispatch({
			type: FETCH_INCOME_CATEGORIES
		});
		fetch("/api/income_categories/?format=json")
			.then(response => response.json())
			.then(json => dispatch(receiveIncomeCategories(json)));
	};
}
export function fetchExpenditureCategories() {
	return function(dispatch) {
		dispatch({
			type: FETCH_EXPENDITURE_CATEGORIES
		});
		fetch("/api/expenditure_categories/?format=json")
			.then(response => response.json())
			.then(json => dispatch(receiveExpenditureCategories(json)));
	};
}

function receiveIncomeTransactions(json) {
	return {
		type: RECEIVE_INCOME_TRANSACTIONS,
		incomeTransactions: json,
		receivedAt: Date.now()
	};
}

function receiveExpenditureTransactions(json) {
	return {
		type: RECEIVE_EXPENDITURE_TRANSACTIONS,
		expenditureTransactions: json,
		receivedAt: Date.now()
	};
}

function receiveIncomeCategories(json) {
	return {
		type: RECEIVE_INCOME_CATEGORIES,
		incomeCategories: json,
		receivedAt: Date.now()
	};
}

function receiveExpenditureCategories(json) {
	return {
		type: RECEIVE_EXPENDITURE_CATEGORIES,
		expenditureCategories: json,
		receivedAt: Date.now()
	};
}
