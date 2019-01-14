import { UPDATE_CURRENT, UPDATE_SCREEN, UPDATE_SCROLLING, TOGGLE_TOC, INITIAL } from "./constants.js";

const regex = /([0-9]+)/g;
let num = location.hash;
num = num.match(regex) || [''];
const start = num[num.length - 1] ? parseInt(num[num.length - 1]) : 0;

const initialState = {
  current: start,
  beginning: start,
  end: start,
  scrolling: false,
  viewScreen: 0,
  visibleToC: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT:
      if (action.payload < state.beginning) {
        return { ...state, current: action.payload, beginning: action.payload };
      } else if (action.payload > state.end) {
        return { ...state, current: action.payload, end: action.payload };
      }
      return { ...state, current: action.payload };
    case UPDATE_SCREEN:
      return { ...state, viewScreen: action.payload };
    case UPDATE_SCROLLING:
      return { ...state, scrolling: !state.scrolling };
    case TOGGLE_TOC:
      return { ...state, visibleToC: !state.visibleToC };
    case INITIAL:
      return { ...state, current: action.payload, beginning: action.payload, end: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
