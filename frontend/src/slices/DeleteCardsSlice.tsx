import { createSlice } from "@reduxjs/toolkit";

export const DeleteCardSlice = createSlice({
  name: "deleteCards",
  initialState: {
    value: [] as string[],
  },
  reducers: {
    addCard: (state, action) => {
      state.value.push(action.payload);
    },
    removeCard: (state, action) => {
      let deleteIndex = 0;
      state.value.forEach((card, index) => {
        if(card === action.payload) deleteIndex = index;
      });
      delete state.value[deleteIndex];
    }
  },
});

export const { addCard, removeCard } = DeleteCardSlice.actions;
