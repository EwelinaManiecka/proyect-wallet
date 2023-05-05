import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  modalType: null,
  isModalAddTransactionOpen: false,
};

export const resetState = createAction('global/resetState');

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalLogout(state) {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
    setModalType(state, action) {
      state.modalType = action.payload;
    },
    toggleModalAddTransaction(state) {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
  },
});

export const { openModalLogout, closeModalLogout, toggleModalAddTransaction } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
