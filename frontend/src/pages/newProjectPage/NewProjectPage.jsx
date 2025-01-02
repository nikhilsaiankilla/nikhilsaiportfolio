import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast'

import "./style.scss";
import SkillsSelector from "../../components/skillsSelector/SkillsSelector";
import { useNavigate } from "react-router-dom";
import {addProjectsSlice} from '../../slicer/homeSlice/HomeSlice'

const NewProjectPage = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tagline, setTagline] = useState("");
    const [demo_url, setDemoUrl] = useState("");
    const [code_url, setCodeUrl] = useState("");
    const [Sskills, setSskills] = useState([]);
    const [skills, setSkills] = useState([]);
    const [image, setImage] = useState(null);
    const filePlaceholderRef = useRef(null)
    const [starProject, setStarProject] = useState(false);

    const [loading, setLoading] = useState(false);

    const token = useSelector((state) => state.auth.token);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const postProjectToServer = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post(`https://nikhilsaiportfolio-1.onrender.com/api/v1/addProjects`,
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (response.status === 200) {
                toast.success("Project uploaded successfully!")
                setName(null);
                setTagline(null);
                setDescription(null);
                setDemoUrl(null);
                setCodeUrl(null);
                setImage(null);
                setSskills([]);
                setStarProject(null);
                filePlaceholderRef.current.textContent = "No file chosen";

                const id = response?.data?.data?.id;
                dispatch(addProjectsSlice(response?.data?.data));
                navigate(`/project/${id}`)
            }
        } catch (error) {
            toast.error(error.response ? error.response.data : "Something went wrong!")
        }
        setLoading(false);
    }

    const handleDesc = (e) => {
        setDescription(e);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file && filePlaceholderRef.current) {
            filePlaceholderRef.current.textContent = file.name;
        } else if (filePlaceholderRef.current) {
            filePlaceholderRef.current.textContent = "No file chosen";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("tagline", tagline);
        formData.append("description", description);
        formData.append("demo_url", demo_url);
        formData.append("code_url", code_url);
        formData.append("image_url", image);

        Sskills.forEach((skill, index) => {
            formData.append(`skillIds`, skill);
        });

        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        postProjectToServer(formData);
    };

    const handleSkillSelect = (selectedSkills) => {
        setSskills(selectedSkills);
    };

    const handleClick = () => {
        setStarProject(!starProject);
    };

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('https://nikhilsaiportfolio-1.onrender.com/api/v1/getAllSkills');
    
                if(response.status === 200){
                    setSkills(response?.data?.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSkills();
    },[]);

    return (
        <div className="new-project-page">
            <h1 className="page-title">Upload Project</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="tagline"
                    placeholder="Tagline"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                />
                <input
                    type="text"
                    name="demo_url"
                    placeholder="Demo link"
                    value={demo_url}
                    onChange={(e) => setDemoUrl(e.target.value)}
                />
                <input
                    type="text"
                    name="code_url"
                    placeholder="GitHub link"
                    value={code_url}
                    onChange={(e) => setCodeUrl(e.target.value)}
                />
                <div className="editorContainer">
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={description}
                        onChange={handleDesc}
                    />
                </div>

                <SkillsSelector onSkillSelect={handleSkillSelect} skills={skills}/>

                <div className="file-upload-container">
                    <div className="file-upload">
                        <input
                            type="file"
                            name="image_url"
                            id="image-upload"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="image-upload">Choose Project Thumbnail</label>
                    </div>
                    <div ref={filePlaceholderRef} className="file-placeholder">
                        No file chosen
                    </div>
                </div>
                <button
                    type="button" // Explicitly specify the type to prevent form submission
                    onClick={handleClick}
                    style={{
                        backgroundColor: starProject ? "goldenrod" : "lightgray",
                        color: starProject ? "white" : "black",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {starProject ? "Unmark as star" : "Mark it as star"}
                </button>
                <button type="submit" >{loading === true ? "loading.." : "upload"}</button>
            </form>
        </div>
    );
};

export default NewProjectPage;
