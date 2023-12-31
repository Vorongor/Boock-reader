import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const fetchPlanning = createAsyncThunk(
  'planning/fetchLibrary',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }
    try {
      const curentHeaders = setAuthHeader(persistedToken);
      const response = await axios.get('/planing/all', {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      console.log('🚀 ~ file: operations.js:25 ~ response:', response);
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
      const jsonData = JSON.stringify(plan);
      const response = await axios.post('/planing/add', jsonData, {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      console.log('🚀 ~ file: operations.js:50 ~ response:', response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updatePlanning = createAsyncThunk(
  '/planning/updatePlanning',
  async (pages, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }
    try {
      const currentHeaders = setAuthHeader(persistedToken);
      const jsonData = JSON.stringify({ pages: pages });

      const response = await axios.patch('/planning', jsonData, {
        headers: {
          'Content-Type': 'application/json',
          ...currentHeaders,
        },
      });
      console.log('🚀 ~ file: operations.js:75 ~ response:', response);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
