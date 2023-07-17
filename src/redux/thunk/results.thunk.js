import { battle } from "../../utils/api.js";
import { getResultsLoading, getResultsError, setResults } from "../actions/results.actions.js";

export const fetchResults = (players) => (dispatch) => {
    dispatch(getResultsLoading);
    return battle(players)
        .then(([winner, loser]) => {
            dispatch(setResults(winner, loser));
            dispatch(getResultsLoading(false));
        })
        .catch(error => {
            console.error(error);
            dispatch(getResultsError(true));
        })
}