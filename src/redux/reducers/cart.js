import * as Constants from "../constants";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_PIZZA_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((acc, prev) => prev.price + acc, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice
      };
    }

    default:
      return state;
  }
};

export default cart;