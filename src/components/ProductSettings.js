import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewProduct } from "../store/product-actions";
function ProductSettings() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDecription] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();
  const update = () => {
    const newProduct = {
      ProductName: productName,
      Price: Number(price),
      Description: description,
      Quantity: Number(quantity),
    };
    dispatch(createNewProduct({ newProduct }));
  };
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
