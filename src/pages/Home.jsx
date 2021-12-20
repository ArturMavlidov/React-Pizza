import React, { useEffect } from "react";
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas, setLoaded } from "../redux/actions/pizzas";

const categories = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortPopupItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "Alphabet" },
];

export default function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const {category, sortBy} = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category));
  }, [category]);

  const selectCategory = React.useCallback((name) => {
    dispatch(setCategory(name));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} categoryIndex={category} onClickItem={selectCategory} />
        <SortPopup items={sortPopupItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((obj) => <PizzaBlock {...obj} key={obj.id} />) : Array(12).fill(0).map((item, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}
