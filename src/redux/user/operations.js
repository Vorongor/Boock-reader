import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

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
      const response = await axios.get('/planning', {
        headers: {
          'Content-Type': 'application/json',
          ...curentHeaders,
        },
      });
      console.log('🚀 ~ file: operations.js:24 ~ response:', response);
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
      const response = await axios.post('/planning', jsonData, {
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
export const patchPlanning = createAsyncThunk(
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
        const response = await axios.patch('/planning', jsonData, {
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

