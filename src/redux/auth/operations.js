import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const authInstance = axios.create({
  baseURL: 'https://wallet-app.herokuapp.com/api',
  timeout: '8000',
  mode: 'cors',
});
// axios.defaults.headers.Access-Control-Allow-Origin = '*'

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/sign-up',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/auth/sign-up', credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/sign-in',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/auth/sign-in', credentials);
      setAuthToken(data.token);
      console.log(axios.defaults.headers.common.Authorization);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('sign-out', async (_, thunkAPI) => {
  try {
    await authInstance.delete('/auth/sign-out');
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthToken(persistedToken);
      const { data } = await authInstance.get('/users/current');
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
