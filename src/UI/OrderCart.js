import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { createOrders, deleteOneOrder } from "../store/order-actions";
import { orderActions } from "../store/order-slice";
import Alerts from "./Alerts";

function OrderCart({ orders, userId }) {
  const dispatch = useDispatch();
  const alertIsVisible = useSelector((state) => state.alertx.alertIsVisible);
  const notification = useSelector((state) => state.alertx.notification);

  const incrace = (e) => {
    dispatch(orderActions.incraceQuantity({ productName: e.target.id }));
  };
  const decrice = (e) => {
    const theOrder = orders.find((state) => state.productName === e.target.id);
    if (theOrder.quantity === 0) {
      //if the orders quantity is zero the order from redux and db
      dispatch(deleteOneOrder({ orders, productName: e.target.id, userId }));
    }

    dispatch(orderActions.decriceQuantity({ productName: e.target.id }));
  };
  const updateOrder = (e) => {
    dispatch(
      orderActions.decriceQuantity({
        productName: e.target.id,
        deleteAll: true,
      })
    );
    dispatch(deleteOneOrder({ orders, productName: e.target.id, userId }));
  };
  const updateOrders = () => {
    dispatch(createOrders({ orders, userId }));
  };

  return (
    <>
      <div className="flex  flex-col ">
        <div className="flex  justify-center flex-col ">
          {orders.map((o) => (
            <div className="p-1 " key={o.productName}>
              <div className=" w-90 min-w-full  bg-slate-50 p-1 h-24 min-h-full rounded">
                <div className="flex flex-col justify-between">
                  <div className="flex justify-center">
                    <div>resim</div>
                  </div>
                  <div className="flex  justify-between">
                    <div className="flex flex-col items-center m-1 p-1 bg-stone-300	rounded">
                      <p className="font-bold	text-rose-900"> Product Name</p>
                      <div className="font-bold">{o.productName}</div>
                    </div>
                    <div className="flex flex-col items-center  m-1 p-1 bg-stone-300 rounded	">
                      <p className="font-bold text-rose-900	">Price</p>
                      <div className="font-bold">{o.price + "₺"}</div>
                    </div>
                    <div className="flex items-center">
                      <div className=" flex flex-col m-1 p-1 bg-stone-300	rounded">
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

        <div className="flex mt-2 flex-col justify-center">
          <>
            {alertIsVisible && (
              <Alerts
                alertType={notification.alertType}
                msg={notification.msg}
              />
            )}
          </>
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
