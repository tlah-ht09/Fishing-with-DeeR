import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Menu } from "./pages/menu";
import { FishingGround } from "./pages/main/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/fishingGround" element={<FishingGround />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
