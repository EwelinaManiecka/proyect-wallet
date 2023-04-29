export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const selectError = state => state.auth.error;

export const getUsername = state => state.auth.user.name;

export const getLoading = state => state.auth.isLoading;

export const getToken = state => state.auth.token;

export const getBalance = state => state.auth.user.balance;

export const getCategories = state => state.auth.user;

export const getTransactionsUser = state => state.auth.user.transactions;

export const addTransactionsUser = state => state.auth.user.transactions;

export const getUserEmail = state => state.auth.user.email;

export const getIsRegistered = state => state.auth.isRegistered;
