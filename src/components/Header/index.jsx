import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

import logoSvg from "../../assets/img/pizza-logo.svg";
import cartSvg from "../../assets/img/cart.svg";
import "./style.scss";

export default function Header() {
  const [state, setState] = useState(0);

  return (
    <div className="header" onClick={() => setState(Math.random())}>
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
            <Button className="button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter"></div>
              <img src={cartSvg} alt="" />
              <span>3</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
