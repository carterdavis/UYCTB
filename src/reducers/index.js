import { UPDATE_CURRENT, UPDATE_SCREEN, INITIAL } from "../constants/action-types";

const regex = /([0-9]+)/g;
let num = location.hash;
num = num.match(regex) || [''];
const start = num[num.length - 1] ? parseInt(num[num.length - 1]) : 0;

const initialState = {
  current: start,
  beginning: start,
  end: start,
  viewScreen: 0
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
    case INITIAL:
      return { ...state, current: action.payload, beginning: action.payload, end: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
