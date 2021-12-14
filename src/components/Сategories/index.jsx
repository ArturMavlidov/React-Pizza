import React, { useState } from "react";
import './style.scss'

export default function Categories({ items }) {
  const [activeItem, setActiveItem] = useState("default");

  const onChange = (name) => () => setActiveItem(name);

  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeItem === "default" ? "active" : ' '}
            onClick={onChange("default")}
          >
            Все
          </li>
          {items?.map((item, index) => (
            <li
              className={activeItem === item ? "active" : ''}
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
