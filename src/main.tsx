import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "@/styles/base/index.scss";
import GlobalStyles from "./Styled/Common/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
