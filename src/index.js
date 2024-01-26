import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./Mock";

const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);
