import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    getAllOrders(state, actions) {
      state.orders = actions.payload;
    },
    updateOrderByProductName(state, actions) {
      state.orders = actions.payload
console.log(state.orders)

    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
