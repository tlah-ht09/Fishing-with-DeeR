import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Menu } from "./pages/menu";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Menu></Menu>
  </StrictMode>
);
