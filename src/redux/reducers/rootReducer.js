import { combineReducers } from 'redux';
import { popularReducer } from './popularReducer.js';
import { battleReducer } from './battleReducer.js';
import { resultsReducer } from './resultsReducer.js';

export const rootReducer = combineReducers({
    popularReducer,
    battleReducer,
    resultsReducer
})