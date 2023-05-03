import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  modalType: null,
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
  },
});

export const { openModalLogout, closeModalLogout } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
