import { createSlice } from '@reduxjs/toolkit';
import { transactionSummary, getStatistics } from './operations';

const initialState = {
  totalBalance: null,
  statistics: { transactionSummary: {}, categoriesStatistics: {} },
  isLoading: false,
  error: null,
};

export const statSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [getStatistics.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getStatistics.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.statistics.categoriesStatistics = action.payload;
      state.error = null;
    },
    [getStatistics.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [transactionSummary.pending](state, { payload }) {
      state.isLoading = true;
      state.error = null;
    },
    [transactionSummary.fulfilled](state, { payload }) {
      state.statistics.transactionSummary = payload;
      state.isLoading = false;
      state.error = null;
    },
    [transactionSummary.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const statReducer = statSlice.reducer;
