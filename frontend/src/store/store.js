import { configureStore } from '@reduxjs/toolkit';
import skillsSlice from '../slicer/features/skillsSlice';
import projectsSlice from '../slicer/features/projectsSlice';
import aboutSlice from '../slicer/features/aboutSlice';
import singleProjectSlice from '../slicer/features/singleProjectSlice';

export const store = configureStore({
  reducer: {
    skills: skillsSlice,
    projects : projectsSlice,
    about : aboutSlice,
    singleProject : singleProjectSlice,
  },
});
