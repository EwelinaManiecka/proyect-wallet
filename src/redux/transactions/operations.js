import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTransactionInstance = axios.create({
  baseURL: 'https://wallet-app.herokuapp.com/',
  timeout: '8000',
  mode: 'cors',
});

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await addTransactionInstance.post(
        'api/transactions',
        transaction
      );
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
      const { data } = await addTransactionInstance.get(
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
      const { data } = await addTransactionInstance.get(
        '/api/transactions',
        transactions
      );
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
      await addTransactionInstance.delete(`/api/transactions/${transactionId}`);
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
      const response = await addTransactionInstance.patch(
        `/api/transactions/${transactionId}`,
        {
          transactionDate,
          type,
          categoryId,
          comment,
          amount,
        }
      );
      const { transaction } = response.data;
      return transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
