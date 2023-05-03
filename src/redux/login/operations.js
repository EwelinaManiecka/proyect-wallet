import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginInstance = axios.create({
  baseURL: 'https://wallet.goit.ua/api/auth',
  timeout: 8000,
  headers: {
    Accept: 'application/json',
    'x-rapidapi-key': '<your-key-here>',
  },
});

const setAuthToken = token => {
  loginInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const logIn = createAsyncThunk(
  'sign-in',
  async (credentials, thunkAPI) => {
    try {
      const response = await loginInstance.post('sign-in', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
