import axios from "axios";
import { orderActions } from "./order-slice";

export const deleteOneOrder = ({ orders, productName, userId }) => {
  return async (dispatch) => {
    const updateOrder = async (orders, userId) => {
      const options = {
        url: `http://localhost:3000/createOrder/${userId}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: "",
        },
        mode: "cors",

        data: {
          Product: orders,
        },
      };
      const response = await axios(options);
      return response;
    };
    try {
      const newOrders = orders.filter((e) => e.productName !== productName);
      const res = await updateOrder(newOrders, userId);
      if (res.data.success === false) {
        return;
      }
      dispatch(orderActions.updateOrderByProductName(newOrders));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllOrders = (id) => {
  return async (dispatch) => {
    const getOrders = async (id) => {
      const o = await axios.get(`http://localhost:3000/getUserOrders/${id}`);
      return o.data;
    };

    try {
      const orders = await getOrders(id);
      console.log(orders.Data.Product);
      dispatch(orderActions.getAllOrders(orders.Data.Product));
    } catch (error) {
      console.log(error);
    }
  };
};
