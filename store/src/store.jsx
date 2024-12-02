import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

const { addCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
  },
});

export function useStore() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  return {
    cart,
    addCart: (cartName) => dispatch(addCart(cartName)),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
