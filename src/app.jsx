import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackgroundGlow from "./components/BackgroundGlow";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <BrowserRouter>
      <BackgroundGlow />
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
