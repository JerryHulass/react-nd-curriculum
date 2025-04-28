import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "list", // or 'grid'
  units: "metric", // or 'imperial'
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleView(state) {
      state.view = state.view === "list" ? "grid" : "list";
    },

    toggleUnits(state) {
      state.units = state.units === "metric" ? "imperial" : "metric";
    },
  },
});

export const { toggleView, toggleUnits } = preferencesSlice.actions;
export default preferencesSlice.reducer;
