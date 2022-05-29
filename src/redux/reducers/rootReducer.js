import { combineReducers } from 'redux';
import { popularReducer } from './popularReducer.js';
import { battleReducer } from './battleReducer.js';

export const rootReducer = combineReducers({
    popularReducer,
    battleReducer
})