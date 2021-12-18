import React, { useState } from "react";
import './style.scss'

const Categories = React.memo(
  function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState("default");

    const onChange = (name) => () => {
      setActiveItem(name);
      onClickItem(name);
    };

    return (
      <div>
        <div className="categories">
          <ul>
            <li
              className={activeItem === "default" ? "active" : " "}
              onClick={onChange("default")}
            >
              Все
            </li>
            {items?.map((item, index) => (
              <li
                className={activeItem === item ? "active" : ""}
                onClick={onChange(item)}
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