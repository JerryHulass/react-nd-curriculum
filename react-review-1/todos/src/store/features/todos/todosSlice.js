// Step 3 Create my Slice and initial State  ✅

import { createSlice } from "@reduxjs/toolkit";

// create our inital state
const initialState = {
  // piece of data
  // TODO
  items: [],
  //{     ...... DATA}
};

// create our SLICE

const todosSlice = createSlice({
  name: "todos",
  initialState,
  // actions (functions) that your can perform on that data called your "todos"
  reducer: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(), // create the item with date
        title: action.payload, // thing we need to do
        completed: false, // completed or not
      });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

// export our actions
export const { addTodo, deleteTodo } = todosSlice.actions;

// export default
export default todosSlice.reducer;
