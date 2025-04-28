import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slices/recipesSlice";
import preferencesReducer from "./slices/preferencesSlice";
import idReducer from "./slices/idSlice"; // new import

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    preferences: preferencesReducer,
    id: idReducer, // include idReducer
  },
});

export default store;
