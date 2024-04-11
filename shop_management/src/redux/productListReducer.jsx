import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = [];

// Create slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Define reducer function for addAdmin action
    productRed: (state, action) => {
      // Update state with payload
      return action.payload;
    }
  }
});

// Extract reducer and actions from slice
const { reducer, actions } = productSlice;

// Extract action creator
export const { productRed } = actions;

// Export reducer
export default reducer;
