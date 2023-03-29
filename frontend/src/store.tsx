import { configureStore } from "@reduxjs/toolkit";

// SLICES
import { ModalSlice } from "./slices/ModalSlice";

const store = configureStore({
  reducer: {
    modal: ModalSlice.reducer,
  },
});

export default store;
