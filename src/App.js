import { initializeApp } from "firebase/app";
import {ref, getDatabase, child, get} from 'firebase/database';

import React from "react";

import { Header } from "./components";
import { Home, Cart } from './pages'
import {Routes, Route} from 'react-router-dom'

import "./app.scss";

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyC3XD7kWjOv1uHCTEzaiX1odq05aiLVZZE",
    authDomain: "react-pizza-7ffa3.firebaseapp.com",
    databaseURL: "https://react-pizza-7ffa3-default-rtdb.firebaseio.com",
    projectId: "react-pizza-7ffa3",
    storageBucket: "react-pizza-7ffa3.appspot.com",
    messagingSenderId: "117931601724",
    appId: "1:117931601724:web:48f0111c18d38688163839",
  };

  const app = initializeApp(firebaseConfig);

  const db = getDatabase();
  const dbref = ref(db);

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


