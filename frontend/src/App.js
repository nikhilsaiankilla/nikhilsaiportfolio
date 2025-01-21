import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing 
import Template from './components/Template';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SingleProject from './pages/SingleProject';
import LoadingPage from './pages/LoadingPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
        setLoading(false);
    }

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    }
  }, [])

  return (
    <>
      {
        loading
          ?
          <LoadingPage />
          :
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Template />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="skills" element={<SkillsPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="project/:id" element={<SingleProject />} />
              </Route>
            </Routes>
          </BrowserRouter>
      }
    </>
  );
}
export default App;
