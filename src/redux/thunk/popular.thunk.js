import { fetchPopularRepos } from "../../utils/api.js";
import { getReposSuccess, getReposFailure, getReposLoading } from "../actions/popular.actions.js";

export const fetchPopularReposThunk = (language) => (dispatch) => {
    dispatch(getReposLoading());
    return fetchPopularRepos(language)
        .then(data => {
            dispatch(getReposSuccess(data));
        })
        .catch((error) => {
            console.error(error);
            dispatch(getReposFailure(true));
        })
}