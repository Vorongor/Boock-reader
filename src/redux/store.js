import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { modalReducer } from './user/slice';
import { listlReducer } from './library/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};
const listlPersistConfig = {
  key: 'liba',
  storage,
};
const modalPersistConfig = {
  key: 'modal',
  storage,
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    modal: persistReducer(modalPersistConfig, modalReducer),
    liba: persistReducer(listlPersistConfig, listlReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
export default store;
