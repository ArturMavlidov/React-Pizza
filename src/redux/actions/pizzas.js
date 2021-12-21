import axios from "axios";

export const fetchPizzas = (catIndex, sort) => (dispatch) => {
  dispatch(setLoaded(false))

  if (sort == 'alphabet') {
    sort = 'name';
  }

  // if (catIndex === null) {
  //   return axios.get(`http://localhost:3001/pizzas?_sort=${sort}&_order=desc`).then(({ data }) => {
  //     dispatch(setPizzas(data));
  //   });
  // }

  return axios.get(`http://localhost:3001/pizzas?${!catIndex ? '' : 'category=' + catIndex}&_sort=${sort}&_order=${sort == 'name' ? 'asc' : 'desc'}`).then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (payload) => ({
  type: "SET_PIZZAS",
  payload,
});

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});