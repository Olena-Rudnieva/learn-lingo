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
import { teachersReducer } from './teachersSlice';
// import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'auth',
  storage,
  //   whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    teachers: persistReducer(persistConfig, teachersReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
