export const selectTransactions = state =>
  state.transactions.transactions.allTransactions;
export const selectCategories = state =>
  state.transactions.categories.categories;
export const selectBalance = state => state.auth.user.balance;
