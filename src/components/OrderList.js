import React from "react";
import { useSelector } from "react-redux";

import "../index.css";
import OrderCart from "../UI/OrderCart";
function OrderList() {
  const orders = useSelector((state) => state.orderx.orders);
  let user = useSelector((state) => state.todox.user);
  const totalPrice = useSelector((state) => state.orderx.totalPrice);
  let userId = user.id;
  return (
    <>
      <div className="flex justify-center">
        {totalPrice <=0 ? null : (
          <div className="bg-pink-200 p-2 rounded m-1">
            total price {totalPrice}$
          </div>
        )}
      </div>
      <div className="flex  m-1 justify-center">
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
