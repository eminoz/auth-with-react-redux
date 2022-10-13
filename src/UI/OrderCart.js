import React from "react";
import { useDispatch } from "react-redux";
import "../index.css";
import { deleteOneOrder } from "../store/order-actions";

function OrderCart({ orders, userId }) {
  const dispatch = useDispatch();
  const updateOrder = (e) => {
    dispatch(deleteOneOrder({ orders, productName: e.target.id, userId }));
  };
  return (
    <>
      <div className="flex  flex-col">
        {orders.map((o) => (
          <div className=" m-1" key={o.productName}>
            <div className=" w-80 min-w-full  bg-slate-50 p-1 h-24 min-h-full rounded">
              <div className="flex flex-col justify-between">
                <div className="flex justify-center">
                  <div>resim</div>
                </div>
                <div className="flex justify-between">
                  <div className="p-1">
                    <p> Product Name</p>
                    <div>{o.productName}</div>
                  </div>
                  <div className="p-1">
                    <p>Price</p>
                    <div>{o.price}</div>
                  </div>
                  <div className="p-1 ">
                    <p>Quantity</p>
                    <div>{o.quantity}</div>
                  </div>
                  <div>
                    <button id={o.productName} onClick={updateOrder}>
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderCart;
