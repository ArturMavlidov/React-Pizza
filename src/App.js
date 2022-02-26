import React from "react";

import { Header } from "./components";
import { Home, Cart } from './pages'
import {Routes, Route} from 'react-router-dom'

import "./app.scss";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/React-Pizza" element={<Home/>} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}


