import { createSlice } from '@reduxjs/toolkit';
import { addBook, fetchLibrary } from 'redux/library/operations';

const initialState = {
  liba: [],
  isFetching: false,
  error: null,
  currentId: null,
  activeBook: null,
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
    setActiveBook: (state, action) => {
      state.activeBook = action.payload;
    },
    rejectActiveBook: state => {
      state.activeBook = null;
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
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.liba.push(action.payload.data);
      });
  },
});
export const { deleteBookReload, setId, setActiveBook, rejectActiveBook } =
  librarySlice.actions;
export const listlReducer = librarySlice.reducer;
