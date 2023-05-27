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
  return response;
});

export const statisticsSlice = createSlice({
  name: 'Covid',
  initialState,
  reducers: {
    showDetails: (state, action) => {
      console.log('hello reducer'); 
      const newState = Object.entries(state)[0][1].map((item) => {
        const show = JSON.parse(JSON.stringify(item));
        if (show.id !== action.payload) return show;
          return { ...show, detailsStatus: true };
        });
        return { ...state, showsItems: newState };
    },
    openModal: (state, action) => {
        
    }
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
