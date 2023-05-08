import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { globalReducer } from './global/global-action';
import { currencyReducer } from './currency/currencySlice';
import { transactionsReducer } from './transactions/transactionsSlice';
import { statReducer } from './statistiscs/statSlice';

const persistToken = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  version: 1,
};

const persistCurrency = {
  key: 'currency',
  storage,
  whitelist: ['currencies'],
  version: 1,
};
const persistTransactions = {
  key: 'transactions',
  storage,
  whitelist: ['transactions'],
  version: 1,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistToken, authReducer),
    global: globalReducer,
    currency: persistReducer(persistCurrency, currencyReducer),
    transactions: persistReducer(persistTransactions, transactionsReducer),
    statistics: statReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
