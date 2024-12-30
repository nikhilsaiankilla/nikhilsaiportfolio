import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: false,
  skills: [],
  projects: [],
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState: initialValue,
  reducers: {
    showNav: (state) => {
      state.value = true;
    },
    hideNav: (state) => {
      state.value = false;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    addSkillsSlice: (state, action) => {
      state.skills = [...state.skills, action.payload];
    },
    removeSkillSlice: (state, action) => {
      state.skills = state.skills.filter(skill => skill.id !== action.payload);
    },
    setProjects: (state, action) => {
      state.projects = action.payload
    },
    addProjectsSlice: (state, action) => {
      state.projects = [...state.projects, action.payload]
    },
    removeProjectSlice: (state, action) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    }
  },
});

export const { showNav, hideNav, addSkillsSlice, removeSkillSlice, setSkills, setProjects, addProjectsSlice, removeProjectSlice } = homeSlice.actions;

export default homeSlice.reducer;
