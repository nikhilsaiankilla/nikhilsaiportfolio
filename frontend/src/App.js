import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Project from './pages/project/Project';
import Admin from './pages/admin/Admin';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import NewProjectPage from './pages/newProjectPage/NewProjectPage';
import Error from './pages/error/Error';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#4aed88",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog/:blogId" element={<Blog />} />
            <Route path="project/:projectId" element={<Project />} />
            <Route path="*" element={<Error />} />

            <Route path="admin/login" element={<Admin />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            <Route path="admin/newProject" element={<NewProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
