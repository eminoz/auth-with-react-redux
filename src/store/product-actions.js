import axios from "axios";
import { productActions } from "./product-slice";

export const createNewProduct = ({ newProduct }) => {
  return async (dispatch) => {
    const createProduct = async ({ newProduct }) => {

      const options = {
        url: "http://localhost:3000/product/create",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: "",
        },
        mode: "cors",

        data: newProduct,
      };
      console.log(options.data)
      const response = await axios(options);
      return response;
    };
    try {
      const response = await createProduct({ newProduct });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProduct = () => {
  return async (dispatch) => {
    const getProducts = async () => {
      const p = await axios.get(`http://localhost:3000/product/getAll`);
      return p.data;
    };
    try {
      const response = await getProducts();
      dispatch(productActions.getProducts(response));
    } catch (error) {
      console.log(error);
    }
  };
};
