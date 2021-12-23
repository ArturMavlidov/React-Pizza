import * as Constants from "../constants";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = arr => {
  return arr.reduce((acc, prev) => prev.price + acc, 0);
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = items.flat();
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }

    case Constants.REMOVE_CART_ITEM:
    const newItems = {
      ...state.items,
    }
    const currentTotalPrice = newItems[action.payload].totalPrice;
    delete newItems[action.payload]

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
      };

    case Constants.CLEAR_CART:
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default cart;
