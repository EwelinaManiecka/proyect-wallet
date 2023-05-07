import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua';


export const transactionSummary = createAsyncThunk(
  'transactions-summary',
  async  ({ year, month }, thunkAPI) => {
    try {
      const response = await axios.get(`/api/transactions-summary?month=${month}&year=${year}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);