import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    // 125: 40760909
    user: {},
    id: "",
    allUser: [],
    email: null,
    isAuth: false,
    token: null,
    role: null,
    address: {},
  },
  reducers: {
    fetchAllUser(state, action) {
      const users = action.payload;
      state.allUser = users;
    },
    fetchUserAddress(state, action) {
      state.address = action.payload;

    },
    fetchUserFromLocal(state) {
      var userFromlocal = localStorage.getItem("token");
      var emailFromlocal = localStorage.getItem("email");
      const localUserToken = JSON.parse(emailFromlocal);
      const localUserEmail = JSON.parse(userFromlocal);

      if (localUserToken === undefined || localUserToken === null) {
        console.log("local is bos");
        return;
      }
      if (localUserToken && localUserEmail) {
        state.token = localUserToken;
        state.email = localUserEmail;
        state.isAuth = true;
      }

      return;
    },
    createUser(state, action) {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.token = action.payload.token;
      state.isAuth = true;

      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("email", JSON.stringify(action.payload.email));
    },
    singin(state, action) {
      console.log(action.payload.email)
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isAuth = true;

      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("email", JSON.stringify(action.payload.email));
    },
    logout(state) {
      localStorage.clear();
      state.user = null;
      state.isAuth = false;
    },
    getUserByEmail(state, action) {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
