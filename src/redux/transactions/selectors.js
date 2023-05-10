export const selectTransactions = state => state.transactions.transactions;
export const selectCategories = state => state.transactions.categories;
export const selectBalance = state => state.auth.user.balance;
export const selectWasUpdated = state => state.transactions.wasUpdated;
