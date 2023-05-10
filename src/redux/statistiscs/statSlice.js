import { createSlice } from '@reduxjs/toolkit';
import { transactionSummary} from './operations';

const initialState = {
  totalBalance: null,
  statistics: {},
  isLoading: false,
  error: null,
};

export const statSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [transactionSummary.pending](state, { payload }) {
      state.isLoading = true;
      state.error = null;
    },
    [transactionSummary.fulfilled](state, { payload }) {
      state.statistics = payload.transactionSummary.summary;
      state.isLoading = false;
      state.error = null;
    },
    [transactionSummary.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const statReducer = statSlice.reducer;
