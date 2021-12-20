import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

import { Header } from "./components";
import { Home, Cart } from './pages'
import {Routes, Route} from 'react-router-dom'
import { fetchPizzas } from "./redux/actions/pizzas";

import "./app.scss";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}


