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
  },
});

export const { setBuckets } = BucketsSlice.actions;
