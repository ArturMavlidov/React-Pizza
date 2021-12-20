import React, { useState } from "react";
import './style.scss'

const Categories = React.memo(
  function Categories({ items, categoryIndex, onClickItem }) {

    const onChange = (index) => () => {
      onClickItem(index);
    };

    return (
      <div>
        <div className="categories">
          <ul>
            <li
              className={categoryIndex === null ? "active" : " "}
              onClick={onChange(null)}
            >
              Все
            </li>
            {items?.map((item, index) => (
              <li
                className={categoryIndex === index ? "active" : ""}
                onClick={onChange(index)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

export default Categories;