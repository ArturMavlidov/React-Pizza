import React from 'react'
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from '../redux/actions/filters'

const categories = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortPopupItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "Alphabet" },
];

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const selectCategory = React.useCallback((name) => {
    dispatch(setCategory(name));
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} onClickItem={selectCategory} />
        <SortPopup items={sortPopupItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items?.map((obj) => (
          <PizzaBlock {...obj} key={obj.id} />
        ))}
      </div>
    </div>
  );
}
