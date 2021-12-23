import * as Constants from "../constants";

export const addPizzaToCart = (payload) => ({
  type: Constants.SET_PIZZA_CART,
  payload
})

export const plusCartItem = (payload) => ({
  type: Constants.PLUS_CART_ITEM,
  payload,
});

export const minusCartItem = (payload) => ({
  type: Constants.MINUS_CART_ITEM,
  payload,
});

export const removeCartItem = (payload) => ({
  type: Constants.REMOVE_CART_ITEM,
  payload
});

export const clearCart = () => ({
  type: Constants.CLEAR_CART,
});