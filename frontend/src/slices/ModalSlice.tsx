import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "Modal",
  initialState: {
    value: {
      isActive: false,
      link: "",
    },
  },
  reducers: {
    setModal: (state, action) => {
      state.value = action.payload;
    },
    clear: (state) => {
      state.value = {
        isActive: false,
        link: "",
      };
    },
  },
});

export const { setModal, clear } = ModalSlice.actions;
