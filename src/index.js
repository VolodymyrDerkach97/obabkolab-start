import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

import { ThemeProvider } from "@emotion/react";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = {
  colors: {
    accent: "rgb(54, 175, 173)",
    secondary: "#fff",
  },
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
