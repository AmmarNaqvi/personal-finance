import * as sampleActions from "../actions/formActions"
const initialState = {
	clicks: 0,
}
export default function counters(state = initialState, action = {}) {
	switch (action.type) {
		case sampleActions.INCREASE:
			return { ...state,
				clicks: state.clicks + 1
			}
		default:
			return state
	}
}