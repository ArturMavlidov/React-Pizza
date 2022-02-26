import axios from "axios";
import * as constants from '../constants'

export const fetchPizzas = (catIndex, sort) => (dispatch) => {
  dispatch(setLoaded(false))

  if (sort === 'alphabet') {
    sort = 'name';
  }

  const sortPizzas = (arr) => {
    const pizzas = catIndex ? arr.filter((item) => item.category === catIndex) : arr;

    pizzas.sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "price") return b.price - a.price;
      if (sort === "alphabet") return b.name - a.name;
    });

    return pizzas;
  }

  return axios
    .get(`https://react-pizza-7ffa3-default-rtdb.firebaseio.com/pizzas.json`)
    .then(({ data }) => {
      const sortedPizzas = sortPizzas(data);
      dispatch(setPizzas(sortedPizzas));
    });
};

export const setPizzas = (payload) => ({
  type: constants.SET_PIZZAS,
  payload,
});

export const setLoaded = (payload) => ({
  type: constants.SET_LOADED,
  payload,
});