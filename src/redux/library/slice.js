import { createSlice } from '@reduxjs/toolkit';
import { fetchLibrary } from 'redux/library/operations';

const initialState = {
  goingToRead: [],
  currentlyReading: [],
  finishedReading: [],
  user: { name: '', email: '' },
  isFetching: false,
  error: null,
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.goingToRead = action.payload.goingToRead;
        state.currentlyReading = action.payload.currentlyReading;
        state.finishedReading = action.payload.finishedReading;
        state.user = action.payload;
        state.isFetching = false;
        state.error = false;
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { deleteBookReload } = librarySlice.actions;
export const listlReducer = librarySlice.reducer;
