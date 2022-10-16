import { configureStore } from "@reduxjs/toolkit";
import todoActions from "./user-slice";
import ordersActions from "./order-slice";
import productActions from "./product-slice";

const store = configureStore({
  reducer: {
    todox: todoActions.reducer,
    orderx: ordersActions.reducer,
    productx: productActions.reducer,
  },
});

export default store;
