import { createSlice } from "@reduxjs/toolkit"
import { CatalogProduct } from "../modules/product/types"

const initialState: Array<CatalogProduct> = []

const getProductIndex = (state: Array<CatalogProduct>, action: { payload: { id: number } }): number => {
  return state.findIndex((i) => i.id === action.payload.id)
}

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const index = getProductIndex(state, action)
      if (index === -1) {
        action.payload.quantity = 1 // Initialize the quantity
        state.push(action.payload)
      } else {
        state[index].quantity++
      }
    },
    removeProductFromCart: (state, action) => {
      const index = getProductIndex(state, action)
      state.splice(index, 1)
    },
    decreaseProductQuantity: (state, action) => {
      const index = getProductIndex(state, action)
      if (state[index].quantity > 0) {
        state[index].quantity--
      } else {
        state.splice(index, 1)
      }
    },
    increaseProductQuantity: (state, action) => {
      const index = getProductIndex(state, action)
      state[index].quantity++
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addProductToCart, removeProductFromCart, clearCart, decreaseProductQuantity, increaseProductQuantity } =
  cartItemsSlice.actions

export default cartItemsSlice.reducer
