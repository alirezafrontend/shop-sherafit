import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  showCart: boolean;
}

const initialState: CartState = {
  showCart: false,
};

const CartToggleSlice = createSlice({
  name: "cartToggle",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    openCart: (state) => {
      state.showCart = true;
    },
    closeCart: (state) => {
      state.showCart = false;
    },
  },
});

export const { toggleCart, openCart, closeCart } = CartToggleSlice.actions;
export const selectShowCart = (state: RootState) => state.cartToggle.showCart;
export default CartToggleSlice.reducer;
