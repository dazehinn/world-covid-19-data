import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  dataArray: [],
  isLoading: false,
};

export const fetchCovidData = createAsyncThunk('get/Covid19', async () => {
  const url = 'https://api.api-ninjas.com/v1/covid19?date=2022-01-01';
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'X-Api-Key': 'rqBsI0z9wOGAqafKnCkkEA==KMMCPBuS2rX5v54e' },
    contentType: 'application/json',
  });
  const response = await res.json();

  const countryData = response.map((country) => ({
    id: uuidv4(),
    country: country.country,
    region: country.region,
    cases: country.cases,
    show: false,
  }));
  return countryData;
});

export const statisticsSlice = createSlice({
  name: 'Covid',
  initialState,
  reducers: {
    showDetails: (state, action) => {
      console.log('show details');
      state.dataArray.map((country) => {
        if (country.country === action.payload) {
          return { ...country, show: true };
        }
        return { ...country, show: false };
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCovidData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCovidData.fulfilled, (state, action) => {
      state.dataArray = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCovidData.rejected, (state) => {
      state.isLoading = false;
      // state.dataArray = [];
      // state.error = action.error.message;
    });
  },

});

export default statisticsSlice.reducer;
export const { showDetails } = statisticsSlice.actions;
