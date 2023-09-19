import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: 'iterface',
  initialState,
  reducers: {
    setModalOn: state => {
      state.showModal = true;
    },
    setModalOff: state => {
      state.showModal = false;
    },
  },
});
export const { setModalOn, setModalOff } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
