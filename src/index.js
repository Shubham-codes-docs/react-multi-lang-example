import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "./index.css";
import App from "./App";
const loading = <h2>Loading.....</h2>;

ReactDOM.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
