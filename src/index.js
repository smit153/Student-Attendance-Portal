import React from "react";
import ReactDOM from "react-dom/client";
import { StudentContextProvider } from "./Context/studentList";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StudentContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StudentContextProvider>
);
