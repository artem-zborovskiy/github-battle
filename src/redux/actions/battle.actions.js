import { BATTLE_ENTITY } from "../constants/battle.constants.js";

export const setPlayer = (id, username) => ({
    type: BATTLE_ENTITY.SET_PLAYER,
    id,
    username
})

export const doReset = (id) => ({
    type: BATTLE_ENTITY.DO_RESET,
    id
})