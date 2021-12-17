import * as Constants from "../constants";

const setSortBy = (name) => ({
  type: Constants.SET_SORT_BY,
  payload: name,
});

const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});
