import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const transactionInstance = axios.create({
  baseURL: 'https://wallet-app.herokuapp.com/api',
  timeout: '8000',
  mode: 'cors',
});

export const transactionSummary = createAsyncThunk(
  'transactions-summary',
  async ({ year, month }, thunkAPI) => {
    try {
      const response = await transactionInstance.get(
        `/transactions-summary?year=${year}&month=${month}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
