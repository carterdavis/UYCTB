import { UPDATE_CURRENT, UPDATE_SCREEN, INITIAL } from "../constants/action-types";

export const updateCurrent = chapter => ({ type: UPDATE_CURRENT, payload: chapter });

export const updateScreen = num => ({ type: UPDATE_SCREEN, payload: num });

export const initial = chapter => ({ type: INITIAL, payload: chapter });
