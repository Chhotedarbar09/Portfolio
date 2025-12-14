import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/hero";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import Projects from "./component/Projects/Project";
import ProjectsSheet from "./component/Projects/ProjectSheet";
import { useBottomSheet } from "./hooks/useBottomSheet";

export default function App() {
  const { isOpen, open, close } = useBottomSheet();

  return (
    <div className="bg-[#1e1e1e] text-gray-200 min-h-screen">
      
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Hero onViewProjectsClick={open} />}
        />
        <Route
          path="/skills"
          element={<Skills />}
        />
        <Route
         path="/contact"
         element={<Contact />}
       />
      </Routes>

      {isOpen && (
        <ProjectsSheet onClose={close}>
          <Projects />
        </ProjectsSheet>
      )}

      <Footer />
    </div>
  );
}
