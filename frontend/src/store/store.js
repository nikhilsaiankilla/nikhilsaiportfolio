import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './../slicer/homeSlice/HomeSlice'

export const store = configureStore({
  reducer: {
    navSlider : homeReducer,
  },
})