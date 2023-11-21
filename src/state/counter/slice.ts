import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
    increaseCountByQty: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(increaseCountAsync.pending, () => {
        console.log('Async call: pending...');
      })
      .addCase(increaseCountAsync.fulfilled, (state) => {
        state.count += 1;
      });
  },
});

export const increaseCountAsync = createAsyncThunk(
  'counter/increaseCountAsync',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
);

export default counterSlice.reducer;
export const { increaseCount, decreaseCount, increaseCountByQty } =
  counterSlice.actions;
