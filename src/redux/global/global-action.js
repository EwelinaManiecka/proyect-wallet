import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  idModalAddTransactionOpen: false,
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
    toggleModalAddTransaction(state) {
      state.idModalAddTransactionOpen = !state.idModalAddTransactionOpen;
    },
  },
});

export const { openModalLogout, closeModalLogout, toggleModalAddTransaction } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
