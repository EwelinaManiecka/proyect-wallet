import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
//import { loginReducer } from './login/loginSlice';
//import { contactsReducer } from './contacts/contactsSlice';
//import { filterReducer } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { globalReducer } from './global/global-action';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  version: 1,
};

//const persistedReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    global: globalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
