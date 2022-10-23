import React from "react";
import Profile from "./Profile/Profile";
import "../index.css";
import Header from "./Header";
import OrderList from "./OrderList";
// import UserList from "./UserList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="orders" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
