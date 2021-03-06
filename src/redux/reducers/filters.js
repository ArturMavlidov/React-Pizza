import * as Constants from "../constants";

const initialState = {
  category: null,
  sortBy: "rating",
};

const fitlers = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case Constants.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default fitlers;
