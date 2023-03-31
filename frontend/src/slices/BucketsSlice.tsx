import { createSlice } from "@reduxjs/toolkit";

export const BucketsSlice = createSlice({
  name: "buckets",
  initialState: {
    value: [
      {
        bucket_name: "",
      },
    ],
  },
  reducers: {
    setBuckets: (state, action) => {
      state.value = action.payload;
    },
    clearBuckets: (state) => {
      state.value = [{ bucket_name: "" }];
    },
  },
});

export const { setBuckets, clearBuckets } = BucketsSlice.actions;
