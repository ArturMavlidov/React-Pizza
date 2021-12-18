import * as Constants from "../constants";

export const setSortBy = (name) => ({
  type: Constants.SET_SORT_BY,
  payload: name,
});

export const setCategory = (catName) => ({
  type: Constants.SET_CATEGORY,
  payload: catName,
});
