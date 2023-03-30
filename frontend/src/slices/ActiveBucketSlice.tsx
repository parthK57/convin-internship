import { createSlice } from "@reduxjs/toolkit";

export const ActiveBucketSlice = createSlice({
  name: "activeBucket",
  initialState: {
    value: "",
  },
  reducers: {
    setBucket: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBucket} = ActiveBucketSlice.actions;
