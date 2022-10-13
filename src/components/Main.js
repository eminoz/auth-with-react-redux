import React from "react";
import Profile from "../components/Profile";
import "../index.css";
import Header from "./Header";
import OrderList from "./OrderList";
// import UserList from "./UserList";
function Main() {
  return (
    <>
      <Header />
      <OrderList />
      <Profile />
    </>
  );
}

export default Main;
