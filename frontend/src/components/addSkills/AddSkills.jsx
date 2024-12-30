import { useEffect, useState, useRef } from 'react';
import './style.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addSkillsSlice, removeSkillSlice, setSkills } from './../../slicer/homeSlice/HomeSlice'

const AddSkills = () => {
    const [newSkill, setNewSkill] = useState('');
    const [newSkillImage, setNewSkillImage] = useState(null);
    const filePlaceholderRef = useRef(null);
    const [addSkillLoading, setAddSkillLoading] = useState(false);
    const [deletingSkillId, setDeletingSkillId] = useState(null);

    //token
    const token = useSelector(state => state.auth.token);
    const skills = useSelector(state => state.navSlider.skills);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddSkill = async () => {
        setAddSkillLoading(true);

        if (newSkill && newSkillImage) {
            const formData = new FormData();
            formData.append('name', newSkill);
            formData.append('image_url', newSkillImage);

            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/addSkill`, formData, {
                    headers: {
                        'Authorization': 'bearer ' + token,
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (response.status !== 200) {
                    return toast.error("error status !== 200")
                }

                toast.success('Skill added successfully');
                const newSkillData = {
                    id: response?.data?.data?.id,
                    name: response?.data?.data?.name,
                    image_url: response?.data?.data?.image_url,
                };
                setNewSkill('');
                setNewSkillImage(null);
                filePlaceholderRef.current.textContent = 'No file chosen';
                dispatch(addSkillsSlice(newSkillData));
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.error || "Something went wrong in add skill");
            }
        } else {
            toast.error('Please provide both skill name and image');
        }
        setAddSkillLoading(false);
    };

    const handleDeleteSkill = async (id) => {
        setDeletingSkillId(id);
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/deleteSkill/${id}`, {
                headers: {
                    "Authorization": "bearer " + token
                }
            });

            if (response.status === 200) {
                dispatch(removeSkillSlice(id));
                toast.success('Skill deleted successfully');
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error || "Something went wrong");
        }
        setDeletingSkillId(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewSkillImage(file);
            filePlaceholderRef.current.textContent = file.name;
        }
    };

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/getAllSkills`);

                if (response.status !== 200) {
                    return toast.error('Something went wrong');
                }

                if (response.status === 404) {
                    return toast.error('no skills found');
                }
                dispatch(setSkills(response?.data?.data));
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.error || "Something went wrong");
            }
        };
        fetchSkills();
    }, [dispatch, skills]);

    return (
        <div className='add-skills-container'>
            <h1 className="title">Skills</h1>

            <div className="skills-container">
                {
                    skills.length > 0 ? skills.map((skill, index) => (
                        <div className="skill" key={skill?.id}>
                            <img src={skill?.image_url} alt={skill?.name} className="skill-image" />
                            <div className="skill-details">
                                <p className="skill-name">{skill?.name}</p>
                                <button className="delete-button"
                                    onClick={() => handleDeleteSkill(skill?.id)}
                                    disabled={deletingSkillId === skill?.id}
                                >
                                    {deletingSkillId === skill?.id ? "Deleting...!" : "Delete"}
                                </button>
                            </div>
                        </div>
                    )) :
                        "No Skills Found"
                }
            </div>

            <div className="add-btn-container">
                <div className="upload-skill-container">
                    <div className="file-upload-container">
                        <div className="file-upload">
                            <input
                                type="file"
                                name="image_url"
                                id="image-upload"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="image-upload">Choose Skill Image</label>
                        </div>
                        <div ref={filePlaceholderRef} className="file-placeholder">
                            No file chosen
                        </div>
                    </div>

                    <div className="new-skill-container">
                        <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="Enter skill name"
                        />
                        <button className="add-skill-button" onClick={handleAddSkill}>{addSkillLoading ? "Adding Please Wait" : "Add Skill"}</button>
                    </div>
                </div>

                <div className="button" onClick={() => navigate('/admin/newProject')}>
                    add new project
                </div>
            </div>
        </div>
    );
}

export default AddSkills;
