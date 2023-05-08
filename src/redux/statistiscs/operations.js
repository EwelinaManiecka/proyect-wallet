import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const currencyInstance = axios.create({
  baseURL: 'https://wallet.goit.ua',
  timeout: '8000',
  mode: 'cors',
});



export const transactionSummary = createAsyncThunk(
  'transactions-summary',
  async  ({ year, month }, thunkAPI) => {
    try {
      const response = await currencyInstance.get(`/api/transactions-summary?month=${month}&year=${year}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);