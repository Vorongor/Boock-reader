import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addBook = createAsyncThunk(
  '/book/addBook',
  async (book, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }

    try {
      const curentHeaders = setAuthHeader(persistedToken);
      const jsonData = JSON.stringify(book);
      const response = await axios.post('/book', jsonData, {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
