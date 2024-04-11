import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {};

// Create slice
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    // Define reducer function for addAdmin action
    addAdmin: (state, action) => {
      // Update state with payload
      return action.payload;
    }
  }
});

// Extract reducer and actions from slice
const { reducer, actions } = adminSlice;

// Extract action creator
export const { addAdmin } = actions;

// Export reducer
export default reducer;
