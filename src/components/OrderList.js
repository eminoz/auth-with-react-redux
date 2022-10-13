import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../store/order-actions";
import "../index.css";
import OrderCart from "../UI/OrderCart";
function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderx.orders);
  let user = useSelector((state) => state.todox.user);

  let userId = user.id;
  useEffect(() => {
    dispatch(getAllOrders(userId));
  }, [userId, dispatch]);
  return (
    <>
      <div className="flex m-2 justify-center">
        {orders ? <OrderCart userId={userId} orders={orders} />  : <p>Order boş</p>}
      </div>
      
    </>
  );
}

export default OrderList;
