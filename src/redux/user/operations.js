import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const fetchLibrary = createAsyncThunk(
  'user/fetchLibrary',
  // Ось зміни в сигнатурі функції. Вам не потрібні аргументи.
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user info');
    }

    try {
      // Виконуємо GET-запит з правильним токеном в заголовку Authorization
      const response = await axios.get('/user/books', {
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      // Після завершення запиту забираємо токен з заголовку
      axios.defaults.headers.common.Authorization = null;
    }
  }
);
