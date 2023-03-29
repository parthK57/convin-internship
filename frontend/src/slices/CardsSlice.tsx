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
  },
});

export const { setCards } = CardsSlice.actions;
