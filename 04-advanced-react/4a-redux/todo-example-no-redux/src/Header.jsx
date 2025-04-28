import React from "react";

const Header = () => {
  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: isDarkMode ? "#1f1f1f" : "#f0f0f0",
    padding: "10px 20px",
    // borderBottom: isDarkMode ? "1px solid #444" : "1px solid #ddd",
  };

  return (
    <header style={headerStyles}>
      <h1>Todo List App</h1>
    </header>
  );
};

export default Header;
