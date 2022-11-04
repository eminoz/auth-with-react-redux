import React, { useState } from "react";

function ProductSettings() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDecription] = useState("");
  const [quantity, setQuantity] = useState("");
const update=()=>{
  const newProduct={productName,price,description,quantity}
  console.log(newProduct)
}
  return (
    <>
      <div className="flex m-2 justify-center">
        <div className="bg-green-200	m-1 p-3 flex flex-col ">
          <div className="flex items-center justify-between">
            <p className="font-bold"> Product Name:</p>
            <input
              className="m-1 rounded p-1"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              placeholder="product name"
              type="text"
              name="il"
            />
          </div>
          <div className="flex items-center justify-between ">
            <p className="font-bold">Price:</p>
            <input
              className="m-1 rounded p-1"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="price"
              type="text"
              name="price"
            />
          </div>
          <div className="flex items-center justify-between ">
            <p className="font-bold"> Description:</p>
            <input
              className="m-1 rounded p-1"
              onChange={(e) => {
                setDecription(e.target.value);
              }}
              placeholder="description"
              type="text"
              name="description"
            />
          </div>
          <div className="flex items-center justify-between ">
            <p className="font-bold"> Quantity:</p>
            <input
              className="m-1 rounded p-1"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              placeholder="quantiy"
              type="text"
              name="quantiy"
            />
          </div>
            <button className="bg-violet-300 p-1 rounded m-1" onClick={update}>
              Add product
            </button>
          </div>
      </div>
    </>
  );
}

export default ProductSettings;
