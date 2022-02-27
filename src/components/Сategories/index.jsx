import React from "react";
import './style.scss'

const Categories = React.memo(
  function Categories({ items, categoryIndex, onClickItem }) {

    const onChange = (index) => () => {
      onClickItem(index);
    };

    return (
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
                className={categoryIndex - 1 === index ? "active" : ""}
                onClick={onChange(index + 1)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
    );
  }
);

export default Categories;