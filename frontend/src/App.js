import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Project from './pages/project/Project';
import Admin from './pages/admin/Admin';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import NewProjectPage from './pages/newProjectPage/NewProjectPage';
import About from './pages/About/About';
import Error from './pages/error/Error';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://nikhilsaiportfolio-1.onrender.com/api/v1/getAdmin`);

        if (response.status !== 200) {
          return toast.error('Something went wrong. Unable to fetch data');
        }

        setUserData(response?.data?.data[0]);
      } catch (error) {
        console.log(error);
        return toast.error('Something went wrong. Unable to fetch data');
      }
    };
    fetchData();
  }, []);

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
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home userData={userData} />} />
            <Route path="blog/:blogId" element={<Blog />} />
            <Route path="project/:projectId" element={<Project />} />
            <Route path="about" element={<About userData={userData} />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Admin />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="upload/project" element={<NewProjectPage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
