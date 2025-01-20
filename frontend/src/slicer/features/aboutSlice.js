import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    about: {},
  },
  reducers: {
    setAbout: (state, action) => {
      state.about = action.payload;
    },
  },
});

export const { setAbout } = aboutSlice.actions;
export default aboutSlice.reducer;