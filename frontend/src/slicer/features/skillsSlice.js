import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: [],
  },
  reducers: {
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;