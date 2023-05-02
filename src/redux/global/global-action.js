import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
};

export const resetState = createAction('global/resetState');

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
  },
});

export const { openModalLogout, closeModalLogout } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
