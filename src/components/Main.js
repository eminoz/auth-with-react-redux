import React, { useEffect } from "react";
import Profile from "./Profile/Profile";
import "../index.css";
import Header from "./Header";
import OrderList from "./OrderList";
// import UserList from "./UserList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import ProductSettings from "./ProductSettings";
import { useDispatch } from "react-redux";
import { getUserByEmail } from "../store/user-actions";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByEmail());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="productSettings/*" element={<ProductSettings />} />
        <Route path="orders" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
