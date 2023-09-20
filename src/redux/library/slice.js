import { createSlice } from '@reduxjs/toolkit';
import { fetchLibrary } from 'redux/user/operations';

const initialState = {
  list: [],
  error: null,
};

const librarySlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setAddToList: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.liba = action.payload;
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { setAddToList } = librarySlice.actions;
export const listlReducer = librarySlice.reducer;
