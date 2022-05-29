import { RESULTS_ENTITY } from "../constants/results.constants.js";

export const initialState = {
    loading: true,
    error: null,
    winner: null,
    loser: null
}

export const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESULTS_ENTITY.GET_RESULTS_LOADING:
            state.loading = action.payload;
            state.error = null;
            return Object.assign({}, state);

        case RESULTS_ENTITY.GET_RESULTS_ERROR:
            state.loading = false;
            state.error = action.payload;
            return Object.assign({}, state);

        case RESULTS_ENTITY.SET_RESULTS:
            state.winner = action.winner;
            state.loser = action.loser;
            return Object.assign({}, state);

        default:
            return state;
    }
}