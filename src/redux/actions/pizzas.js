import axios from "axios";
import * as constants from '../constants'

export const fetchPizzas = (catIndex, sort) => (dispatch) => {
  dispatch(setLoaded(false))

  if (sort == 'alphabet') {
    sort = 'name';
  }

  return axios.get(`/pizzas?${!catIndex ? '' : 'category=' + catIndex}&_sort=${sort}&_order=${sort == 'name' ? 'asc' : 'desc'}`).then(({ data }) => {
    dispatch(setPizzas(data));
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