import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    email: null,
    isAuth: false,
    token: null,
    role: null,
  },
  reducers: {
    fetchUserFromLocal(state) {
      var userFromlocal = localStorage.getItem("token");
      const localUser = JSON.parse(userFromlocal);
      if (localUser) {
        state.token = localUser;
        state.isAuth = true;
      }
      console.log("local is bos");

      return;
    },
    createUser(state, action) {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    singin(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isAuth=true
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
