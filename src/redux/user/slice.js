import { createSlice } from '@reduxjs/toolkit';
import { fetchPlanning } from './operations';

const initialState = {
  planingData: null,
  showModal: false,
  firstIn: true,
  startDay: false,
};

const modalSlice = createSlice({
  name: 'modal',
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
  extraReducers: builder => {
    builder.addCase(fetchPlanning.fulfilled, (state, action) => {
      state.planingData = action.payload;
    });
  },
});
export const { setModalOn, setModalOff, setUsualIn, setFirstIn } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
