import { configureStore } from "@reduxjs/toolkit";
import todoActions from "./todo-slice";

const store = configureStore({
  reducer: { todox: todoActions.reducer },
});

export default store;
