import axios from "axios";
import { productActions } from "./product-slice";
import { alertActions } from "./alert-slice";
const getToken = () => {
  var userFromlocal = localStorage.getItem("token");

  const localUserToken = JSON.parse(userFromlocal);
  return localUserToken;
};
export const createNewProduct = ({ newProduct }) => {
  return async (dispatch) => {
    const createProduct = async ({ newProduct }) => {
      const localToken=getToken()
      const options = {
        url: "http://localhost:3000/product/create",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: localToken,
        },
        mode: "cors",

        data: newProduct,
      };

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
export const updateProduct = ({ Product }, productName) => {
  return async (dispatch) => {
    dispatch(alertActions.toggle());
    setTimeout(() => {
      dispatch(alertActions.toggle());
    }, 4000);
    dispatch(
      alertActions.showNotification({
        msg: "product updating",
        alertType: "info",
      })
    );
    const updateProduct = async ({ Product, productName }) => {
      const localToken=getToken()
      const options = {
        url: `http://localhost:3000/product/update/${productName} `,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: localToken,
        },
        mode: "cors",

        data: Product,
      };
      const response = await axios(options);
      return response;
    };
    try {
      const response = await updateProduct({ Product, productName });
      if (response.data.Success === false) {
        console.log(response.data)
        dispatch(
          alertActions.showNotification({
            msg: response.data.Message,
            alertType: "danger",
          })
        );
        return
      }
      dispatch(
        alertActions.showNotification({
          msg: response.data.Message,
          alertType: "info",
        })
      );
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
      dispatch(productActions.getProducts(response.Data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteProduct = ({ productName }) => {

  return async (dispatch) => {
    const deleteProduct = async () => {
      const localUser=getToken()
      const options = {
        url: `http://localhost:3000/product/delete/${productName} `,
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: localUser,
        },
        mode: "cors",
      };

      const response = await axios(options);
      return response.data;
    };
    try {
      const response = await deleteProduct(productName);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};
