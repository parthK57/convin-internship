import { createSlice } from "@reduxjs/toolkit";

export const HistorySlice = createSlice({
  name: "history",
  initialState: {
    isActive: false,
    value: [
      {
        cardName: "",
        link: "",
        bucketName: "",
        timestamp: "",
      },
    ],
  },
  reducers: {
    setState: (state, action) => {
      state.isActive = action.payload;
    },
    clearState: (state) => {
      state.isActive = false;
    },
    pushHistory: (state, action) => {
      state.value.push(action.payload);
    },
    setHistory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setState, clearState, pushHistory, setHistory } =
  HistorySlice.actions;
