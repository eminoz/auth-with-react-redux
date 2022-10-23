import axios from "axios";
import { orderActions } from "./order-slice";
import { userActions } from "./user-slice";

export const createUser = ({ user }) => {
  return async (dispatch) => {
    const createNewUser = async (user) => {
      const options = {
        url: "http://localhost:3000/createUser",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: "",
        },
        mode: "cors",

        data: {
          Name: user.name,
          Email: user.email,
          Password: user.password,
          Role: "user",
        },
      };
      const responsedata = await axios(options);

      return responsedata;
    };
    try {
      const res = await createNewUser(user);
      if (res.data.Success === false) {
        alert(res.data.Message);
        return;
      }
      console.log(res.data);

      dispatch(userActions.createUser(res.data.Data));
    } catch (err) {
      console.log(err);
      if (err.response.status === 409) {
        console.log("already exist");
      }
    }
  };
};
export const signin = ({ user }) => {
  return async (dispatch) => {
    const signin = async (user) => {
      const options = {
        url: "http://localhost:3000/signin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        mode: "cors",

        data: {
          Email: user.email,
          Password: user.password,
        },
      };
      const responsedata = await axios(options);

      return responsedata;
    };
    try {
      const res = await signin(user);
      if (res.data.Success === false) {
        alert(res.data.Message);
        return;
      }

      dispatch(userActions.singin(res.data.Data));
    } catch (err) {
      console.log(err.response.status);
    }
  };
};
export const updateUserByEmail = ({ user }) => {
  return async (dispatch) => {
    var userFromlocal = localStorage.getItem("token");
    var emailFromlocal = localStorage.getItem("email");
    const localUserEmail = JSON.parse(emailFromlocal);
    const localUserToken = JSON.parse(userFromlocal);
    const updateUser = async (user) => {
      const options = {
        url: `http://localhost:3000/updateUser/${localUserEmail}`,
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          token: localUserToken,
        },
        mode: "cors",

        data: {
          ID: user.id,
          Name: user.name,
          Email: user.email,
        },
      };

      const responsedata = await axios(options);
      return responsedata;
    };
    try {
      const r = await updateUser(user);
      if (user.email === "") {
        return;
      }

      localStorage.setItem("email", JSON.stringify(user.email));
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getUserByEmail = () => {
  return async (dispatch) => {
    const getUser = async (email) => {
      var userFromlocal = localStorage.getItem("token");

      const localUserToken = JSON.parse(userFromlocal);
      const user = await axios.get(
        `http://localhost:3000/getUserByEmail/${email}`,
        {
          headers: {
            token: localUserToken,
          },
        }
      );

      return user.data;
    };
    const getOrders = async (id) => {
      const o = await axios.get(`http://localhost:3000/getUserOrders/${id}`);
      return o.data;
    };

    try {
      var emailFromlocal = localStorage.getItem("email");
      const email = JSON.parse(emailFromlocal);

      if (!email) {
        return;
      }
      const user = await getUser(email);
      if (user.Success === false) {
        alert(user.Message);
        //if token has been expired app will log out
        dispatch(userActions.logout());
        return;
      }
      const responseUser = user.Data;

      const orders = await getOrders(responseUser.id);
      if (orders.Data.Product === null) {
        dispatch(orderActions.getAllOrders([]));
      } else {
        dispatch(orderActions.getAllOrders(orders.Data.Product));
      }

      dispatch(userActions.getUserByEmail(responseUser));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchAllUser = () => {
  return async (dispatch) => {
    const fetchAll = async () => {
      const res = await axios.get("http://localhost:3000/getAllUser");
      return res.data.Data;
    };
    try {
      const users = await fetchAll();

      dispatch(userActions.fetchAllUser(users));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getUsersAddress = (email) => {
  return async (dispatch) => {
    const getAddress = async () => {
      const user = await axios.get(`http://localhost:3000/getUserAddress/${email}`, {
        headers: {
          token: "localUserToken",
        },
      });
      return user.data;
    };
    try {
      const response = await getAddress(email);


        

      dispatch(userActions.fetchUserAddress(response.Data));
    } catch (error) {
      console.log(error);
    }
  };
};
