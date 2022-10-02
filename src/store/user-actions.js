import axios from "axios";
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
      console.log(res.data.Data);

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

      console.log(res.data);
      dispatch(userActions.singin(res.data.Data));
    } catch (err) {
      console.log(err.response.status);
    }
  };
};
