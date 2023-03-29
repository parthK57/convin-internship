import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    value: {
     isActive: false,
    },
  },
  reducers: {
    toggleCardModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleCardModal } = CardSlice.actions;
