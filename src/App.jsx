import { Navbar } from "./components/Navbar";
import SkillsModel from "./components/SkillsModel";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beam";
import AboutPage from "./pages/About";
import ContactUs1 from "./pages/Contact";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-white w-full">
        <div className="max-w-6xl  mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs1 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default App;
