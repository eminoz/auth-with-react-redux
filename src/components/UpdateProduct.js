import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../index.css";
import {  updateProduct } from "../store/product-actions";
function UpdateProduct() {
  const { productId } = useParams();
  const prods = useSelector((s) => s.productx.products);
  const product = { ...prods.filter((e) => e.productName === productId) };

  const [productName, setProductName] = useState(product[0].productName);
  const [price, setPrice] = useState(product[0].price);
  const [description, setDecription] = useState(product[0].description);
  const [quantity, setQuantity] = useState(product[0].quantity);

  const dispatch = useDispatch();

  const update = () => {
    const Product = {
      ProductName: productName,
      Price: Number(price),
      Description: description,
      Quantity: Number(quantity),
    };
    console.log(Product)
    dispatch(updateProduct({ Product },productId));
  };

  return (
    <>
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
                name="productName"
                value={productName}
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
                value={price}
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
                value={description }
              />
            </div>
            <div className="flex items-center justify-between ">
              <p className="font-bold"> Quantity:</p>
              <input
                className="m-1 rounded p-1"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                placeholder="quantity"
                type="text"
                value={quantity}
                name="quantity"
              />
            </div>
            <button className="bg-violet-300 p-1 rounded m-1" onClick={update}>
              Update product
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default UpdateProduct;
