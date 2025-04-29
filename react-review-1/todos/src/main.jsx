// Step 2 Connect the store to the project  ✅

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import from react-redux to connect to our store
import { Provider } from "react-redux";

// import is the store to connect it
import store from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
