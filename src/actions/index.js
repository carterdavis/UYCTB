import { UPDATE_CURRENT, INITIAL } from "../constants/action-types";

export const updateCurrent = chapter => ({ type: UPDATE_CURRENT, payload: chapter });

export const initial = chapter => ({ type: INITIAL, payload: chapter });
