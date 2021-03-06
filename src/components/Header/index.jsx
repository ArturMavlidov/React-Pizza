import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../Button";

import logoSvg from "../../assets/img/pizza-logo.svg";
import cartSvg from "../../assets/img/cart.svg";
import "./style.scss";

export default function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
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
            <Button className="button-cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <div className="button-cart__right">
                <img src={cartSvg} alt="" />
                <span>{totalCount}</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
