// Step 1 Create the Store ✅

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todosSlice";

const store = configureStore({
  reducer: {
    // all of our different slices
    todos: todosReducer,
  },
});

export default store;
