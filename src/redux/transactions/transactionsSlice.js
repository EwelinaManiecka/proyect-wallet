import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactionCategories,
  getAllTransactions,
  deleteTransaction,
  updateTransaction,
} from './operations';

const initialState = {
  transactions: [],
  error: null,
  isLoading: false,
  categories: [],
  balance: 0,
  wasUpdated: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [addTransaction.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addTransaction.fulfilled](state, action) {
      state.isLoading = false;
      state.transactions.push(action.payload);
      state.balance = action.payload.balanceAfter;
    },
    [addTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getTransactionCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTransactionCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.categories;
      state.error = null;
    },
    [getTransactionCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllTransactions.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllTransactions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transactions = action.payload.allTransactions;
      state.error = null;
      state.balance = 0;
    },
    [getAllTransactions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteTransaction.pending]: state => {
      state.isLoading = true;
    },
    [deleteTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.transactions.findIndex(
        transaction => transaction.id === action.payload
      );
      state.transactions.splice(index, 1);
    },
    [deleteTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateTransaction.pending]: (state, action) => {
      state.isLoading = true;
      state.wasUpdated = true;
    },
    [updateTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.transactions.findIndex(
        transaction => transaction.id === action.payload.id
      );
      state.transactions[index] = action.payload;
      state.wasUpdated = false;
    },
    [updateTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.wasUpdated = false;
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
