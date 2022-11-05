import React from "react";
import { useDispatch } from "react-redux";
import "../index.css";
import { orderActions } from "../store/order-slice";
function ProductList({ prods }) {
  const dispatch = useDispatch();
  const addToCart = (e) => {
    const currentProd = prods.filter(
      (state) => state.productName === e.target.id
    );
    dispatch(orderActions.addOrderToCart(...currentProd));
  };
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {prods &&
          prods.map((p) => (
            <div
              key={p.productName}
              className="flex  bg-slate-100	m-1 p-3 rounded"
            >
              <div>
                <div className="flex flex-col w-48 h-52 justify-between">
                  <p>resim</p>
                  <div className="flex flex-row">
                    <p className=" font-bold mr-1">{p.productName}</p>
                    <p className="	">{p.description}</p>
                  </div>
                </div>
                <div className="flex m-3  justify-between">
                  <p
                    className="text-2xl text-amber-600	 font-bold"
                  >
                    {p.price}₺
                  </p>
                  <button
                    id={p.productName}
                    className="bg-fuchsia-200	p-1 rounded"
                    onClick={addToCart}
                  >
                    add to card
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductList;
