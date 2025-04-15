import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// pembungkus browser router harus di main
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* App dibungkus browser router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
