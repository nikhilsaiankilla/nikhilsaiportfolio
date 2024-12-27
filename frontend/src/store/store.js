import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './../slicer/homeSlice/HomeSlice'
import authReducer from './../slicer/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    navSlider: homeReducer,
    auth: authReducer,
  },
})