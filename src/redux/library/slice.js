import { createSlice } from '@reduxjs/toolkit';
import { fetchLibrary } from 'redux/library/operations';

const initialState = {
  liba: [],
  isFetching: false,
  error: null,
  currentId: null,
};

const librarySlice = createSlice({
  name: 'liba',
  initialState,
  reducers: {
    deleteBookReload: (state, action) => {
      const bookIdToDelete = action.payload;
      state.goingToRead = state.goingToRead.filter(
        book => book._id !== bookIdToDelete
      );
      state.currentlyReading = state.currentlyReading.filter(
        book => book._id !== bookIdToDelete
      );
      state.finishedReading = state.finishedReading.filter(
        book => book._id !== bookIdToDelete
      );
    },
    setId: (state, action) => {
      state.currentId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.liba = action.payload.data;
        state.isFetching = false;
        state.error = false;
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { deleteBookReload, setId } = librarySlice.actions;
export const listlReducer = librarySlice.reducer;
