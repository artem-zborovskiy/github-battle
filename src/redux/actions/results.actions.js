import { RESULTS_ENTITY } from "../constants/results.constants.js";

export const getResultsLoading = (payload) => ({
    type: RESULTS_ENTITY.GET_RESULTS_LOADING,
    payload
})

export const getResultsError = (payload) => ({
    type: RESULTS_ENTITY.GET_RESULTS_ERROR,
    payload
})

export const setResults = (winner, loser) => ({
    type: RESULTS_ENTITY.SET_RESULTS,
    winner,
    loser
})