import { createSlice } from "@reduxjs/toolkit"
import { CatalogProduct } from "../modules/product/types"

const initialState: Array<CatalogProduct> = []

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload.id)
      state.splice(index, 1);
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addProductToCart, removeProductFromCart, clearCart } =
  cartItemsSlice.actions

export default cartItemsSlice.reducer
