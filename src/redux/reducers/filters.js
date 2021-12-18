import * as Constants from "../constants";

const initialState = {
  category: 'Все',
  sortBy: "popular",
};

const fitlers = (state = initialState, action) => {
  if (action.type === Constants.SET_SORT_BY) {
    return {
      ...state,
      sortBy: action.payload,
    };
  } else if (action.type === Constants.SET_CATEGORY) {
    return {
      ...state,
      category: action.payload
    }
  }

  return state;
};

export default fitlers;
