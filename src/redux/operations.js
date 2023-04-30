import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/sign-up',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/sign-up', credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

