import { Navbar } from "./components/Navbar";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beam";
import AboutPage from "./pages/About";
import ContactUs1 from "./pages/Contact";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";

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
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default App;
