import React from "react";

const Footer = () => {
  const footerStyles = {
    marginTop: "20px",
    padding: "10px",
    // backgroundColor: isDarkMode ? "#1f1f1f" : "#f0f0f0",
    // borderTop: isDarkMode ? "1px solid #444" : "1px solid #ddd",
    // color: isDarkMode ? "white" : "black",
    textAlign: "center",
  };

  // const totalTasks = todos.length;
  // const completedTasks = todos.filter((todo) => todo.completed).length;
  // const remainingTasks = totalTasks - completedTasks;

  return (
    <footer style={footerStyles}>
      <p>©️ 2025 Noble Desktodo</p>
      {/* <p>Total Tasks: {totalTasks}</p> */}
      {/* <p>Completed Tasks: {completedTasks}</p> */}
      {/* <p>Remaining Tasks: {remainingTasks}</p> */}
    </footer>
  );
};

export default Footer;
