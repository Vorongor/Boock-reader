import { createSlice } from '@reduxjs/toolkit';
import { fetchPlanning } from './operations';

const initialState = {
  planingData: null,
  showModal: false,
  firstIn: true,
  startDay: false,
  currentPlan: null,
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
    setCurrentPlan: (state, action) => {
      state.currentPlan = action.payload;
    },
    unSetCurrentPlan: state => {
      state.currentPlan = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPlanning.fulfilled, (state, action) => {
      state.planingData = action.payload.data;
    });
  },
});
export const {
  setModalOn,
  setModalOff,
  setUsualIn,
  setFirstIn,
  setCurrentPlan,
  unSetCurrentPlan,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
