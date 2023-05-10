import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from 'redux/auth/operations';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await apiInstance.post('/transactions', transaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTransactionCategories = createAsyncThunk(
  'transactions/getTransactionCategories',
  async (categories, thunkAPI) => {
    try {
      const { data } = await apiInstance.get(
        '/transaction-categories',
        categories
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (transactions, thunkAPI) => {
    try {
      const { data } = await apiInstance.get('/transactions', transactions);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await apiInstance.delete(`/transactions/${transactionId}`);
      return transactionId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transactions​/updateTransaction',
  async (transaction, thunkAPI) => {
    const {
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
      transactionId,
    } = transaction;
    try {
      const state = thunkAPI.getState();
      const response = await apiInstance.patch(
        `/transactions/${transactionId}`,
        {
          transactionDate,
          type,
          categoryId,
          comment,
          amount,
        }
      );
      const { transaction } = response.data;
      return { transaction, state };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
