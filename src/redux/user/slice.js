import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  firstIn: true,
  liba: [],
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
    setUsualIn: state => {
      state.firstIn = false;
    },
    setFirstIn: state => {
      state.firstIn = true;
    },
  },
});
export const { setModalOn, setModalOff, setUsualIn, setFirstIn } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
