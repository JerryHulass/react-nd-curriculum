import React from "react";
// Component you need to import your actions
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
// to use the actions we need to use these two functions called
// useDispatch and useSelector
// useSelector is doing => its specifing which reducer to pick
// useDispatch is trigging the correct action that you want to fire.
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  // get the state
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h3>Counter</h3>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>i + 5</button>
    </div>
  );
}
