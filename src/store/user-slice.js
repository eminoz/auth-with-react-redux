import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuth: false,
    token: null,
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
  },
});
export const userActions = userSlice.actions;
export default userSlice;
