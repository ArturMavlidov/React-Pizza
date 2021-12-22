import * as Constants from "../constants";

export const addPizzaToCart = (payload) => ({
  type: Constants.SET_PIZZA_CART,
  payload
})

export const setTotalPrice = (payload) => ({
  type: Constants.SET_TOTAL_PRICE,
  payload
});

export const setTotalCount = (payload) => ({
  type: Constants.SET_TOTAL_COUNT,
  payload
})