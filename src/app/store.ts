import { configureStore } from "@reduxjs/toolkit";
import pageGridReducer from "../features/pageGrid/PageGridSlice";
import CartToggleSlice from "../features/cart/CartToggleSlice";
import cartSlice from "../features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    pageGrid: pageGridReducer,
    cartToggle: CartToggleSlice,
    cart:cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
