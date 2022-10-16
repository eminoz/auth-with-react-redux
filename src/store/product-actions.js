import axios from "axios";
import { productActions } from "./product-slice";

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
