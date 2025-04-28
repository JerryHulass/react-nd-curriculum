import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TodoContainer from "./TodoContainer";

const App = () => {
  const appStyles = {
    // backgroundColor: isDarkMode ? "#121212" : "#fff",
    // color: isDarkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={appStyles}>
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
};

export default App;
