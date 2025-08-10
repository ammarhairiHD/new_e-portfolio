import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅
import "./index.css";
import App from "./App";
import { MusicProvider } from "./components/Music/MusicContent";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/Music/MusicPlayer";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MusicProvider>
        <Navbar />
        <App />
        <MusicPlayer />
        <Analytics />
      </MusicProvider>
    </BrowserRouter>
  </StrictMode>
);
