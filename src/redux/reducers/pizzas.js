import * as constants from '../constants';

const initialState = {
  items: [],
  isLoaded: false
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case constants.SET_LOADED:
      return {
        ...state,
        isLoaded: false,
      };

    default:
      return state;
  }
};



export default pizzas;
