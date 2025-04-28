import React from "react";

const TodoActions = (props) => {
  const {
    isDarkMode,
    deleteAllTodos,
    markAllComplete,
    deleteAllCompleted,
  } = props;

  const actionsStyles = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    color: "white",
  };

  const completeStyles = {
    ...buttonStyles,
    backgroundColor: isDarkMode ? "#28a745" : "#28a745",
  };

  const deleteCompletedStyles = {
    ...buttonStyles,
    backgroundColor: isDarkMode ? "#dc3545" : "#dc3545",
  };

  const deleteAllStyles = {
    ...buttonStyles,
    backgroundColor: isDarkMode ? "#ffc107" : "#ffc107",
    color: isDarkMode ? "black" : "black",
  };

  return (
    <div style={actionsStyles}>
      <button style={completeStyles} onClick={markAllComplete}>
        Mark All Complete
      </button>
      <button style={deleteCompletedStyles} onClick={deleteAllCompleted}>
        Delete All Completed
      </button>
      <button style={deleteAllStyles} onClick={deleteAllTodos}>
        Delete All Todos
      </button>
    </div>
  );
};

export default TodoActions;
