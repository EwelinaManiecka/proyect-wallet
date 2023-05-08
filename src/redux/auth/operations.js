import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-app.herokuapp.com/api';
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
      const { data } = await axios.post('/auth/sign-up', credentials);
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
      const { data } = await axios.post('/auth/sign-in', credentials);
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
    await axios.delete(
      '/auth/sign-out',
      axios.defaults.headers.common.Authorization
    );
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
      const { data } = await axios.get('/users/current');
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
