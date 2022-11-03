import { createSlice } from "@reduxjs/toolkit";
const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alertIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.alertIsVisible = !state.alertIsVisible;

    },
    showNotification(state, action) {
      state.notification = {
        alertType: action.payload.alertType,
        msg: action.payload.msg,
      };
    },
  },
});
export const alertActions = alertSlice.actions;

export default alertSlice;
