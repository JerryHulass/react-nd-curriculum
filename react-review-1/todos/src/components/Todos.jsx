import React, { useState } from "react";
// all of the actions from my reducer
import { addTodo, deleteTodo } from "../store/features/todos/todosSlice";
// import those function called useSelector && useDispatch
import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const [input, setInput] = useState("");

  const dispatchAdd = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      Todos
      <div>
        {/* create a form for user input */}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={dispatchAdd}>Add Todo</button>
      </div>
      <div>
        {/* I want to loop over the data and display it to the user */}
        {todos.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
