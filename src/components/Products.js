import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/product-actions";
import ProductList from "../UI/ProductList";

function Products() {
  const dispatch = useDispatch();
  const prods = useSelector((s) => s.productx.products);


  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <div className="flex  justify-center">
        <ProductList prods={prods.Data} />
      </div>
    </>
  );
}

export default Products;
