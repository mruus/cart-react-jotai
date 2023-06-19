import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider as JotaiProvider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")).render(
  <JotaiProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </JotaiProvider>
);
