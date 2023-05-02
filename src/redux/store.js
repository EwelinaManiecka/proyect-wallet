import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer} from 'redux-persist';
import { loginReducer } from './login/loginSlice';
import { authReducer } from './auth/authSlice';

const persistConfig = {
  key: 'login',
  storage,
  whitelist: ['token'],
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedReducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
