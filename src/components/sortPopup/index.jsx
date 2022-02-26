import React, { useState, useEffect, useRef } from "react";

import arrowTop from '../../assets/img/arrow-top.svg'
import "./style.scss";

const SortPopup = React.memo(function SortPopup({ items, onClick: selectSort }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(items[0].name);
  const sortRef = useRef();

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const selectItem = (name, type) => () => {
    setActiveItem(name);
    selectSort(type);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img className={visiblePopup ? "rotated" : ""} src={arrowTop} alt="" />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeItem}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items.map((item, index) => (
              <li
                className={activeItem === item.name ? "active" : ""}
                onClick={selectItem(item.name, item.type)}
                key={`${item.type}_${index}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.defaultProps = {
  items: [],
}

export default SortPopup;