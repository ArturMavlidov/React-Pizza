import React, { useState, memo } from "react";
import cn from 'classnames'
import Button from '../Button'

import './style.scss'

const PizzaBlock = memo(({ id, imageUrl, name, price, types, sizes, addedCount, addPizza}) => {
  const avaliableTypes = ["тонкое", "традиционное"];
  const avaliableSizes = sizes;

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const setType = (index) => () => {
    setActiveType(index);
  };

  const setSize = (index) => () => {
    setActiveSize(index);
  };

  const checkSize = () => {
    if (activeSize === 1) return price + 150;
    if (activeSize === 2) return price + 225;
    return price;
  }

  const handleAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price: checkSize(),
      size: sizes[activeSize],
      type: avaliableTypes[activeType],
    };

    addPizza(obj);
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {avaliableTypes.map((type, index) => (
            <li
              className={cn({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
              onClick={setType(index)}
              key={`${type}_${index}`}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {avaliableSizes.map((size, index) => (
            <li
              className={cn({ active: index === activeSize })}
              onClick={setSize(index)}
              key={`${size}_${index}`}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {checkSize()} ₽</div>
        <Button onClick={handleAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
});

export default PizzaBlock;
