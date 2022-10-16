import React from "react";
import "../index.css";
function ProductList({ prods }) {
  console.log(prods);
  return (
    <>
      {prods &&
        prods.map((p) => (
          <div
            key={p.productName}
            className="flex  flex-wrap bg-slate-100	m-1 p-3 rounded"
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
                  className="text-2xl text-amber-600	 font-bold
"
                >
                  {p.price}₺
                </p>
                <button
                  className="bg-fuchsia-200	p-1 rounded"
                  onClick={() => console.log("added")}
                >
                  add to card
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductList;
