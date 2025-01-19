import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slicer/features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
