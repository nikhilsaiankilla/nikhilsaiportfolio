import "./App.scss";

//Importing Pages
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Project from "./pages/project/Project";
import Navbar from "./components/navbar/Navbar";
import FooterSection from "./sections/footerSection/FooterSection";
import Admin from "./pages/admin/Admin";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavSlider from "./components/navbar/navSlider/NavSlider";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import NewProjectPage from './pages/newProjectPage/NewProjectPage'

function App() {
  return (
    <>
      <div>
        <Toaster position='top-right' toastOptions={{
          success: {
            iconTheme: {
              primary: "#4aed88"
            }
          }
        }}>

        </Toaster>
      </div>
      <BrowserRouter>
        <Navbar />
        <NavSlider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/admin/login" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/newProject" element={<NewProjectPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
