import "./App.css";
import CustomCursor from "./components/Animatable/CursorFollower";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Storyboard from "./pages/storyboard";
import StoryDetail from "./pages/storyDetail";
import VesselLog from "./pages/projects";
import Awards from "./pages/awards";
import SkillsPage from "./pages/skills";
import ContactPage from "./pages/contact";
import CommentsPage from "./comments";
import AttributionsPage from "./pages/credits";

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storyboard" element={<Storyboard />} />
        <Route path="/storyboard/:level/:chapter" element={<StoryDetail />} />
        <Route path="/projects" element={<VesselLog />} />
         <Route path="/awards" element={<Awards />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/credits" element={<AttributionsPage />} />
      </Routes>
    </>
  );
}

export default App;
