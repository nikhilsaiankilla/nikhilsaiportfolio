import { Outlet } from 'react-router-dom';
import Navbar from './../navbar/Navbar';
import NavSlider from './../navbar/navSlider/NavSlider';
import FooterSection from './../../sections/footerSection/FooterSection';

const Layout = () => (
  <>
    <Navbar />
    <NavSlider />
    <Outlet />
    <FooterSection />
  </>
);

export default Layout;
