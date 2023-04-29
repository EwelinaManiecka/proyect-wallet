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
    console.log('test async thunk', credentials);
    try {
      const response = await loginInstance.post(credentials);
      console.log(response);
      setAuthToken(response.token);
      return response;
    } catch (e) {
      console.log('test async thunk reject', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);
