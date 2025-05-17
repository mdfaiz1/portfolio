import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import SplashCursor from "./components/ui/splash-cursor.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SplashCursor />
    <App />
  </BrowserRouter>
);
