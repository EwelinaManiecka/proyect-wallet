import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from 'redux/auth/operations';

export const transactionSummary = createAsyncThunk(
  'transactions-summary',
  async ({ year, month }, thunkAPI) => {
    try {
      const response = await apiInstance.get(
        `/transactions-summary?year=${year}&month=${month}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const getStatistics = createAsyncThunk(
//   'transactions/getStatistics',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await apiInstance.get(
//         '/transaction-categories/statistics'
//       );
//       return data.stats;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
