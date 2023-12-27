import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      const response = await axios.get('/books/all', {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });
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
      const response = await axios.post('/books/add', jsonData, {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      console.log('🚀 ~ file: operations.js:47 ~ response:', response.data);
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
      await axios.delete(`/books/book/${bookId}`, {
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
export const addReview = createAsyncThunk(
  '/book/addReview',
  async (bookId, feedback, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }
    try {
      const curentHeaders = setAuthHeader(persistedToken);
      const jsonData = JSON.stringify(feedback);
      const response = await axios.patch(`/book/review/${bookId}`, jsonData, {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      console.log('🚀 ~ file: operations.js:92 ~ response:', response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPlanning = createAsyncThunk(
  '/planning',
  async (plan, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }
    try {
      const curentHeaders = setAuthHeader(persistedToken);

      const response = await axios.post(
        `/books/plan/${plan.id}`,
        { startTime: plan.startTime, finishTime: plan.finishTime },
        {
          headers: {
            'Content-Type': 'application/json',
            ...curentHeaders,
          },
        }
      );
      console.log('🚀 ~ file: operations.js:118 ~ response:', response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTraining = createAsyncThunk(
  '/training',
  async (obj, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }
    try {
      const curentHeaders = setAuthHeader(persistedToken);
      console.log(obj);
      const response = await axios.post(
        `/books/training/${obj.id}`,
        { date: obj.date, result: obj.result },
        {
          headers: {
            'Content-Type': 'application/json',
            ...curentHeaders,
          },
        }
      );
      console.log('🚀 ~ file: operations.js:118 ~ response:', response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
