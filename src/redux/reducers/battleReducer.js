import { BATTLE_ENTITY } from "../constants/battle.constants.js";

export const initialState = {
    playerOneName: '',
    playerOneImg: null,
    playerTwoName: '',
    playerTwoImg: null
}

export const battleReducer = (state = initialState, action) => {
    switch(action.type) {
        case BATTLE_ENTITY.SET_PLAYER:
            state[action.id + "Name"] = action.username;
            state[action.id + "Img"] = `https://github.com/${action.username}.png?size200`;
            return Object.assign({}, state);

        case BATTLE_ENTITY.DO_RESET:
            state[action.id + "Name"] = '';
            state[action.id + "Img"] = null;
            return Object.assign({}, state);

        default:
            return state;
    }
}