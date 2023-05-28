import { configureStore } from '@reduxjs/toolkit';
import CovidReducer from './statisticsSlice';

const store = configureStore({
  reducer: {
    Covid: CovidReducer,
  },
});

export default store;
