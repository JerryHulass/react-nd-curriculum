import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

// Part 1
export const store = configureStore({
  // the data that I want to give to this store.
  reducer: {
    // supplying all of our reducers
    // User
    // Products
    // Messages
    // Reports
    counter: counterReducer,
  },
});
