import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: false,
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState : initialValue,
  reducers: {
    showNav: (state) => {
      state.value = true;
    },
    hideNav: (state) => {
      state.value = false;
    },
  },
});

export const { showNav, hideNav } = homeSlice.actions;

export default homeSlice.reducer;
