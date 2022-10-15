import React, { useEffect } from "react";
import Profile from "../components/Profile";
import "../index.css";
import Header from "./Header";
import OrderList from "./OrderList";
// import UserList from "./UserList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
