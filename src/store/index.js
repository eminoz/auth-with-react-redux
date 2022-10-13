import { configureStore } from "@reduxjs/toolkit";
import todoActions from "./user-slice";
import ordersActions from "./order-slice";

const store = configureStore({
  reducer: { todox: todoActions.reducer, orderx: ordersActions.reducer },
});

export default store;
