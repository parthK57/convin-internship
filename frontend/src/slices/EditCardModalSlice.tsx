import { createSlice } from "@reduxjs/toolkit";

export const EditCardModalSlice = createSlice({
  name: "Modal",
  initialState: {
    value: {
      isActive: false,
      cardId: "",
      cardName: "",
      bucketName: "",
    },
  },
  reducers: {
    setEditCardModal: (state, action) => {
      state.value = action.payload;
    },
    clearEditCardModal: (state) => {
      state.value = {
        isActive: false,
        cardId: "",
        cardName: "",
        bucketName: "",
      };
    },
  },
});

export const { setEditCardModal, clearEditCardModal } =
  EditCardModalSlice.actions;
