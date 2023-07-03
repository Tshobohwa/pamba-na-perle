import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;
