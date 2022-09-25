import { configureStore } from "@reduxjs/toolkit";
import todoActions from "./user-slice";

const store = configureStore({
  reducer: { todox: todoActions.reducer },
});

export default store;
