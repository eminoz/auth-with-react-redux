import React from "react";
import { useDispatch } from "react-redux";
import "../index.css";
import { createOrders, deleteOneOrder } from "../store/order-actions";
import { orderActions } from "../store/order-slice";

function OrderCart({ orders, userId }) {
  const dispatch = useDispatch();

  const incrace = (e) => {
    dispatch(orderActions.incraceQuantity({ productName: e.target.id }));
  };
  const decrice = (e) => {
    dispatch(orderActions.decriceQuantity({ productName: e.target.id }));
  };
  const updateOrder = (e) => {
    dispatch(deleteOneOrder({ orders, productName: e.target.id, userId }));
  };
  const updateOrders = () => {
    dispatch(createOrders({ orders, userId }));
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-center flex-col ">
          {orders.map((o) => (
            <div className=" m-1" key={o.productName}>
              <div className=" w-90 min-w-full mr-1 ml-2 bg-slate-50 p-1 h-24 min-h-full rounded">
                <div className="flex flex-col justify-between">
                  <div className="flex justify-center">
                    <div>resim</div>
                  </div>
                  <div className="flex  justify-between">
                    <div className="flex flex-col  items-center p-1 bg-stone-300	rounded">
                      <p className="font-bold	text-rose-900"> Product Name</p>
                      <div className="font-bold">{o.productName}</div>
                    </div>
                    <div className="flex flex-col items-center   p-1 bg-stone-300 rounded	">
                      <p className="font-bold text-rose-900	">Price</p>
                      <div className="font-bold" >{o.price+"₺"}</div>
                    </div>
                    <div className="flex items-center">
                      <div className=" flex flex-col p-1 bg-stone-300	rounded">
                        <div>
                          <p className="font-bold text-rose-900	">Quantity</p>
                        </div>
                        <div className="flex flex-row justify-between">
                          <button
                            className="bg-red-200 p-1 "
                            id={o.productName}
                            onClick={incrace}
                          >
                            +
                          </button>
                          <div className="font-bold">{o.quantity}</div>
                          <button
                            className="bg-red-200 p-1"
                            id={o.productName}
                            onClick={decrice}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div>
                        <button
                          className="bg-red-200 flex m-2 items-center	rounded p-1"
                          id={o.productName}
                          onClick={updateOrder}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={updateOrders}
            className="p-1 m-3 bg-fuchsia-200 rounded"
          >
            save orders
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderCart;
