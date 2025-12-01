import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Menu } from "./pages/menu";

import { FishingGround } from "./pages/main/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop";
import { Inven } from "./pages/inven";
import { Dict } from "./pages/dict";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/fishingGround" element={<FishingGround />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inven" element={<Inven />} />
        <Route path="/dict" element={<Dict />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
