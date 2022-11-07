import React from "react";
import { useSelector } from "react-redux";

import "../index.css";
import OrderCart from "../UI/OrderCart";
function OrderList() {
  const orders = useSelector((state) => state.orderx.orders);
  let user = useSelector((state) => state.todox.user);

  let userId = user.id;
  return (
    <>
      <div className="flex m-1 justify-center">
        {orders.length !== 0 ? (
          <OrderCart userId={userId} orders={orders} />
        ) : (
          <p>Order boş</p>
        )}
      </div>
    </>
  );
}

export default OrderList;
