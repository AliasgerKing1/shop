import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = [];

// Create slice
const ProductAddToCartSlice = createSlice({
  name: "product cart",
  initialState,
  reducers: {
    // Define reducer function for addAdmin action
    productCartRed: (state, action) => {
      // Update state with payload
      return action.payload;
    }
  }
});

// Extract reducer and actions from slice
const { reducer, actions } = ProductAddToCartSlice;

// Extract action creator
export const { productCartRed } = actions;

// Export reducer
export default reducer;
