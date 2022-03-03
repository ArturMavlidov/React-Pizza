import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

import Button from "../Button";

import logoSvg from "../../assets/img/pizza-logo.svg";
import cartSvg from "../../assets/img/cart.svg";
import "./style.scss";

export default function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  const setPrice = () => {
    let maxlength = 4;
    let priceStr = String(totalPrice);
    if (priceStr.length > maxlength) {
      priceStr = priceStr.slice(0, maxlength) + "...";
    }
    return priceStr;
  }

  return (
    <div className="header">
      <div className="container">
        <Link to="/React-Pizza">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{setPrice()} ₽</span>
              <div className="button__delimiter"></div>
              <img src={cartSvg} alt="" />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
