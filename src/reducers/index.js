import { UPDATE_CURRENT, INITIAL } from "../constants/action-types";
const initialState = {
  current: 0, beginning: 0, end: 0
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
    case INITIAL:
      return { ...state, current: action.payload, beginning: action.payload, end: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
