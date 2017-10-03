import * as actions from "../actions/actions";
const initialState = {
	redirectToReferrer: false,
	loggedIn: false,
	isLoadingIncomeTransactions: false,
	incomeTransactions: undefined,
	isLoadingExpenditureTransactions: false,
	expenditureTransactions: undefined,
	isLoadingExpenditureCategories: false,
	expenditureCategories: undefined,
	isLoadingIncomeCategories: false,
	incomeCategories: undefined
};
export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case actions.LOGIN:
			return {
				...state,
				loggedIn: true,
				redirectToReferrer: true
			};
		case actions.SIGNUP:
			return {};
		case actions.FETCH_INCOME_TRANSACTIONS:
			return {
				...state,
				isLoadingIncomeTransactions: true
			};
		case actions.RECEIVE_INCOME_TRANSACTIONS:
			return {
				...state,
				isLoadingIncomeTransactions: false,
				incomeTransactions: action.incomeTransactions
			};
		case actions.FETCH_EXPENDITURE_TRANSACTIONS:
			return {
				...state,
				isLoadingExpenditureTransactions: true
			};
		case actions.RECEIVE_EXPENDITURE_TRANSACTIONS:
			return {
				...state,
				isLoadingExpenditureTransactions: false,
				expenditureTransactions: action.expenditureTransactions
			};
		case actions.FETCH_INCOME_CATEGORIES:
			return {
				...state,
				isLoadingIncomeCategories: true
			};
		case actions.RECEIVE_INCOME_CATEGORIES:
			return {
				...state,
				isLoadingIncomeCategories: false,
				incomeCategories: action.incomeCategories
			};
		case actions.FETCH_EXPENDITURE_CATEGORIES:
			return {
				...state,
				isLoadingExpenditureCategories: true
			};
		case actions.RECEIVE_EXPENDITURE_CATEGORIES:
			return {
				...state,
				isLoadingExpenditureCategories: false,
				expenditureCategories: action.expenditureCategories
			};
		default:
			return state;
	}
}
