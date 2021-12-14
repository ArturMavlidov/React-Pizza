import React, { useEffect, useState } from "react";
import { Header } from "./components";
import { Home, Cart } from './pages'
import {Routes, Route} from 'react-router-dom'

import "./app.scss";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then((json) => setPizzas(json.pizzas));
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas}/>} exact/>
          <Route path="/cart" element={<Cart />} exact/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
