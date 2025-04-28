import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentId: 0,
};

const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    incrementId(state) {
      state.currentId += 1;
    },
  },
});

export const { incrementId } = idSlice.actions;
export default idSlice.reducer;
