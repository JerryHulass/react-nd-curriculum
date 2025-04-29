// import the thing to create a Slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
  },
});

// exports the ACTIONS to trigger
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export the default reducer

export default counterSlice.reducer;
