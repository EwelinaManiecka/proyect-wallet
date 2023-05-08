import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post('api/transactions', transaction);
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
      const { data } = await axios.get(
        '/api/transaction-categories',
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
      const { data } = await axios.get('/api/transactions', transactions);
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
      await axios.delete(`/api/transactions/${transactionId}`);
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
      const response  = await axios.patch(
        `/api/transactions/${transactionId}`,
        {
          transactionDate,
          type,
          categoryId,
          comment,
          amount,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
