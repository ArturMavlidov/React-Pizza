import React, { useState, useEffect, useRef } from "react";
import './style.scss'
import arrowTop from '../../assets/img/arrow-top.svg'

export default function SortPopup({items}) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(items[0].name)
  const sortRef = useRef();

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
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

  const selectItem = (item) => () => {
    setActiveItem(item)
  }

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img className={visiblePopup ? 'rotated' : ''} src={arrowTop} alt="" />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeItem}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items.map( (item, index) => <li className={activeItem == item.name ? 'active' : ''} onClick={selectItem(item.name)} key={`${item.type}_${index}`}>{item.name}</li> )}
          </ul>
        </div>
      )}
    </div>
  );
}
