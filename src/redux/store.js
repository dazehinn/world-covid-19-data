import { configureStore } from '@reduxjs/toolkit';
import covidReducer, { fetchCovidData } from './statisticsSlice';

const store = configureStore({
  reducer: {
    Covid: covidReducer,
  },
});

store.dispatch(fetchCovidData());
export default store;
