import * as Constants from "../constants";

export const setSortBy = (payload) => ({
  type: Constants.SET_SORT_BY,
  payload
});

export const setCategory = (payload) => ({
  type: Constants.SET_CATEGORY,
  payload
});
