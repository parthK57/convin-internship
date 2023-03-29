import { createSlice } from "@reduxjs/toolkit";

export const BucketsSlice = createSlice({
  name: "buckets",
  initialState: {
    value: [],
  },
  reducers: {
    getBuckets: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getBuckets } = BucketsSlice.actions;
