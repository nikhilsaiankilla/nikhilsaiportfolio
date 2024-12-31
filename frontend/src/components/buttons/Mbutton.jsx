import { useNavigate } from 'react-router'
import './style.scss'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { removeProjectSlice } from '../../slicer/homeSlice/HomeSlice'

const Mbutton = ({ button, link, navigationLink, deleteProject }) => {
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    const handleDeleteProject = async (id) => {
        if (!id) {
            return toast.error('id is requied to delete project');
        }

        const deleteProjectFromDB = window.confirm('delete project from DB');

        if (deleteProjectFromDB) {
            const toastId = toast.loading('deleting please wait');
            try {
                const response = await axios.delete(`https://nikhilsaiportfolio-1.onrender.com/api/v1/deleteProject/${id}`, {
                    headers: {
                        "Authorization": "bearer " + token
                    }
                })

                if (response.status === 200) {
                    toast.remove(toastId);

                    toast.success('project deleted successfully');
                    dispatch(removeProjectSlice(id));
                    navigate('/admin/dashboard');
                }
            } catch (error) {
                console.log(error);
                toast.remove(toastId);
                toast.error('something went wrong please try again');
            }
        }
    }

    const handleNavigation = () => {
        if (navigationLink) {
            navigate(navigationLink);
        }

        if (deleteProject) {
            handleDeleteProject(deleteProject);
        }
    }

    return (
        <div className="border" onClick={handleNavigation}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="button group">
                <span className="button-hover-bar"></span>
                <span className="icon-right">
                    <svg
                        className="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </span>
                <span className="icon-left">
                    <svg
                        className="icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </span>
                <span className="button-text">{button}</span>
            </a>
        </div>

    )
}

export default Mbutton