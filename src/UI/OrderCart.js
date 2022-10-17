import React from "react";
import { useDispatch } from "react-redux";
import "../index.css";
import { deleteOneOrder } from "../store/order-actions";
import { orderActions } from "../store/order-slice";

function OrderCart({ orders, userId }) {
  const dispatch = useDispatch();

  const incrace = (e) => {
    dispatch(orderActions.incraceQuantity({ productName: e.target.id }));
  };
  const decrice = (e) => {
    dispatch(orderActions.decriceQuantity({ productName: e.target.id }));
    console.log(e.target.id);
  };
  const updateOrder = (e) => {
    dispatch(deleteOneOrder({ orders, productName: e.target.id, userId }));
  };

  return (
    <>
      <div className="flex justify-center flex-wrap ">
        {orders.map((o) => (
          <div className=" m-1" key={o.productName}>
            <div className=" w-80 min-w-full mr-1 ml-2 bg-slate-50 p-1 h-24 min-h-full rounded">
              <div className="flex flex-col justify-between">
                <div className="flex justify-center">
                  <div>resim</div>
                </div>
                <div className="flex  justify-between">
                  <div className="p-1 bg-stone-300	rounded">
                    <p className="font-bold	"> Product Name</p>
                    <div>{o.productName}</div>
                  </div>
                  <div className="p-1 bg-stone-300 rounded	">
                    <p className="font-bold	">Price</p>
                    <div>{o.price}</div>
                  </div>
                  <div className="flex items-center">
                    <div className=" flex flex-col p-1 bg-stone-300	rounded">
                      <div>
                        <p className="font-bold	">Quantity</p>
                      </div>
                      <div className="flex flex-row justify-between">
                        <button
                          className="bg-red-200 p-1"
                          id={o.productName}
                          onClick={incrace}
                        >
                          +
                        </button>
                        <div>{o.quantity}</div>
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
                        className="bg-red-200 flex m-1 items-center	rounded p-1"
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
    </>
  );
}

export default OrderCart;
