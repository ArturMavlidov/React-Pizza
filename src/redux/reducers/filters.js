import * as Constants from "../constants";

const initialState = {
  category: 0,
  sortBy: "popular",
};

const fitlers = (state = initialState, action) => {
  if (action.type === Constants.SET_SORT_BY) {
    return {
      ...state,
      sortBy: action.payload,
    };
  }

  return state;
};

export default fitlers;
