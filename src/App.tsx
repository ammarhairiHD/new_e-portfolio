import "./App.css";
import CustomCursor from "./components/Animatable/CursorFollower";
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Storyboard from "./storyboard";
import VesselLog from "./projects";
import SkillsPage from "./skills";
import ContactPage from "./contact";
import CommentsPage from "./comments";
import AttributionsPage from "./credits";

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storyboard" element={<Storyboard />} />
        <Route path="/projects" element={<VesselLog />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/credits" element={<AttributionsPage />} />
      </Routes>
    </>
  );
}

export default App;
