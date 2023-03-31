import { createSlice } from "@reduxjs/toolkit";

export const CardsSlice = createSlice({
  name: "cards",
  initialState: {
    value: [],
  },
  reducers: {
    setCards: (state, action) => {
      state.value = action.payload;
    },
    clearCards: (state) => {
      state.value = [];
    },
  },
});

export const { setCards, clearCards } = CardsSlice.actions;
