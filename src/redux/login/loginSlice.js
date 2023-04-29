import { logIn } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  token: null,
  session: { isAuth: false, error: null },
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [logIn.pending]: (state, action) => {
      state.session.isAuth = false;
      state.isLoading = true;
      state.session.error = null;
    },
    [logIn.fulfilled]: (state, action) => {
      state.session.error = null;
      state.isLoading = false;
      state.session.isAuth = true;
      state.token = action.payload.token;
    },
    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.session.isAuth = false;
      state.session.error = action.payload;
    },
  },
});

export const loginReducer = loginSlice.reducer;
