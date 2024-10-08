import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import pageReducer from "./PageSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
