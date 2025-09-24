"use client";

import { RootState } from "@/app/store";
import { Product } from "@/types/product/typeProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends Product {
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
}

const loadFromLocalStorage = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("cartItems");
    if (data) return JSON.parse(data);
  }
  return [];
};

const saveToLocalStorage = (cartItems: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

const initialState: CartState = {
  cartItems: loadFromLocalStorage(),
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      saveToLocalStorage(state.cartItems);
    },
    decreaseToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) return;

      if (existingItem.qty > 1) {
        existingItem.qty -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      saveToLocalStorage(state.cartItems);
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      saveToLocalStorage(state.cartItems);
    },
  },
});

export const { increaseToCart, decreaseToCart, removeItem } = CartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export default CartSlice.reducer;
