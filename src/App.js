import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { Header } from "./components";
import { Home, Cart } from './pages'
import {Routes, Route} from 'react-router-dom'
import { setPizzas } from './redux/actions/pizzas'

import "./app.scss";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
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


