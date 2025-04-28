import React from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo, isDarkMode }) => {
  const itemStyles = {
    padding: "10px",
    borderBottom: isDarkMode ? "1px solid #444" : "1px solid #ddd",
    textDecoration: todo.completed ? "line-through" : "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: isDarkMode ? "white" : "black",
  };

  const buttonStyles = {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    cursor: "pointer",
  };

  const toggleStyles = {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <li style={itemStyles}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.task}</span>
      <div>
        <button style={toggleStyles} onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button style={buttonStyles} onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
