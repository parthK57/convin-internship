import { createSlice } from "@reduxjs/toolkit";

export const CreateBucketSlice = createSlice({
  name: "createBucketModal",
  initialState: {
    value: {
      isActive: false,
    },
  },
  reducers: {
    toggleModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {toggleModal} =  CreateBucketSlice.actions;
