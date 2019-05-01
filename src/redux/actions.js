import { UPDATE_CURRENT, UPDATE_DIMENSIONS, TOGGLE_TOC, TOGGLE_ABOUT, UPDATE_SCREEN, UPDATE_SCROLLING, INITIAL, ZOIP } from "./constants.js";

export const updateCurrent = chapter => ({ type: UPDATE_CURRENT, payload: chapter });

export const updateDimensions = dimensions => ({ type: UPDATE_DIMENSIONS, payload: dimensions });

export const updateScreen = num => ({ type: UPDATE_SCREEN, payload: num });

export const updateScrolling = () => ({ type: UPDATE_SCROLLING });

export const toggleToC = () => ({ type: TOGGLE_TOC });

export const toggleAbout = () => ({ type: TOGGLE_ABOUT });

export const initial = chapter => ({ type: INITIAL, payload: chapter });

export const zoip = value => ({ type: ZOIP, payload: value });
