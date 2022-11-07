import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../store/product-actions";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

function ProductSettings() {
  const loc = useLocation();
  let navigate = useNavigate();
  const prods = useSelector((s) => s.productx.products);

  const dispatch = useDispatch();
  const deleteTheProduct = (e) => {

    dispatch(deleteProduct({ productName: e.target.name }));
  };
  const updateTheProduct = (e) => {
    navigate(loc.pathname + "/" + e.target.id + `/${e.target.name}`);
  };
  const routeProduct = (e) => {
    navigate(loc.pathname + "/" + e.target.id);
  };
  useEffect(() => {
    dispatch(getAllProduct());
  }, [prods,dispatch]);

  return (
    <>
      <div className="flex m-2 justify-center">
        <div className="m-1 bg-slate-100 p-2	 flex flex-col">
          <button
            id="createProduct"
            onClick={routeProduct}
            className="bg-purple-100 p-1 m-1 rounded"
          >
            create new product
          </button>
          <div className="flex flex-wrap justify-center">
            {prods &&
              prods.map((p) => (
                <div
                  key={p.productName}
                  className="flex  bg-slate-100	m-1 p-3 rounded"
                >
                  <div>
                    <div className="flex bg-neutral-300	p-2 rounded-lg flex-col w-48 h-52 justify-between">
                      <p>resim</p>
                      <div className="flex flex-row">
                        <p className=" font-bold mr-1">{p.productName}</p>
                        <p className="	">{p.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="flex justify-center">
                        <p className="text-2xl text-amber-600	 font-bold">
                          {p.price}₺
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <button
                          id="updateProduct"
                          name={p.productName}
                          className="bg-red-400	m-1	p-1 rounded"
                          onClick={deleteTheProduct}
                        >
                          delete
                        </button>
                        <button
                          id="updateProduct"
                          name={p.productName}
                          className="bg-fuchsia-400 m-1	p-1 rounded"
                          onClick={updateTheProduct}
                        >
                          update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export function ProductRouting() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<ProductSettings />} />
          <Route path="/createProduct" element={<AddProduct />} />
          <Route path="/updateProduct/:productId" element={<UpdateProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default ProductRouting;
