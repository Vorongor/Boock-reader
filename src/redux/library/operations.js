import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchLibrary = createAsyncThunk(
  'user/fetchLibrary',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }
    try {
      const response = await axios.get('/user/books', {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });
      console.log('🚀 ~ file: operations.js:27 ~ response:', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBook = createAsyncThunk(
  '/book/addBook',
  async (book, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

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

export const deleteBook = createAsyncThunk(
  '/book/deleteBook',
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }
    try {
      const curentHeaders = setAuthHeader(persistedToken);
      await axios.delete(`/book/${bookId}`, {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      console.log('end of del func');
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
