import "./App.scss";

//Importing Pages
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Project from "./pages/project/Project";
import Navbar from "./components/navbar/Navbar";
import FooterSection from "./sections/footerSection/FooterSection";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavSlider from "./components/navbar/navSlider/NavSlider";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <NavSlider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
