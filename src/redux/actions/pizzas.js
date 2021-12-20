import axios from "axios";

export const fetchPizzas = (catIndex) => (dispatch) => {
  dispatch(setLoaded(false))

  if (catIndex === null) {
    return axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }

  return axios.get(`http://localhost:3001/pizzas?category=${catIndex + 1}`).then(({ data }) => {
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