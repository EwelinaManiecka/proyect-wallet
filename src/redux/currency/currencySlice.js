import { createSlice } from '@reduxjs/toolkit';
import { getCurrency } from './operations';

const initialState = { error: 'null', currencies: [] };

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  extraReducers: {
    [getCurrency.pending](state, payload) {
      state.error = null;
    },
    [getCurrency.fulfilled](state, { payload }) {
      const currenciesArray = payload[0].rates.filter(
        el => el.code === 'EUR' || el.code === 'USD'
      );
      state.currencies = currenciesArray;
    },
    [getCurrency.rejected](state, payload) {
      state.error = payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;
