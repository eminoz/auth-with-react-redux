import axios from "axios";
import { orderActions } from "./order-slice";
import { alertActions } from "./alert-slice";

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

export const createOrders = ({ orders, userId }) => {
  return async (dispatch) => {
    dispatch(alertActions.toggle());
    setTimeout(() => {
      dispatch(alertActions.toggle());
    }, 4000);
    dispatch(
      alertActions.showNotification({
        msg: "order updating",
        alertType: "info",
      })
    );
    const createOrder = async () => {
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
      return response.data;
    };
    try {
      const product = await createOrder(orders, userId);
      if (product.Success === true) {
        dispatch(
          alertActions.showNotification({
            msg: "order updated",
            alertType: "success",
          })
        );
      }


    } catch (error) {
      console.log(error);
    }
  };
};
export const incraceQuantity = (orders, productName, userId) => {
  return async (dispatch) => {
    console.log({ orders, productName, userId });
  };
};
export const decriceQuantity = () => {
  return async (dispatch) => {};
};
