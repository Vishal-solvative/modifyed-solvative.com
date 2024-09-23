import { createSlice } from "@reduxjs/toolkit";

// Slice for managing activePage
export const pageSlice = createSlice({
  name: "page",
  initialState: {
    activePage: "/",
  },
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

// Export the action to set the active page
export const { setActivePage } = pageSlice.actions;

// Export the reducer to use in the store
export default pageSlice.reducer;
