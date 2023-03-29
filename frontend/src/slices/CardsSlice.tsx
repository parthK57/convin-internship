import { createSlice } from "@reduxjs/toolkit";

export const CardsSlice = createSlice({
  name: "cards",
  initialState: {
    value: [],
  },
  reducers: {
    getCards: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getCards } = CardsSlice.actions;
