import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useSelector } from "react-redux";

import "./style.scss";
import SkillsSelector from "../../components/skillsSelector/SkillsSelector";

const NewProjectPage = () => {
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [demo_url, setDemoUrl] = useState("");
    const [code_url, setCodeUrl] = useState("");
    const [skills, setSkills] = useState([]);
    const [image, setImage] = useState(null);
    const filePlaceholderRef = useRef(null)

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const token = useSelector((state) => state.auth.token);

    const postProjectToServer = async (formData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                process.env.REACT_APP_BACKEND_BASE_URL + "/addProjects",
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            if (response.status === 200) {
                setData(response.data);
                alert('Project uploaded successfully!');
            }
            console.log(response);
        } catch (error) {
            console.error(error);
            setError(error.response ? error.response.data : "Something went wrong!");
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

        skills.forEach((skill, index) => {
            formData.append(`skillIds`, skill);
        });

        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        postProjectToServer(formData);
    };

    const handleSkillSelect = (selectedSkills) => {
        setSkills(selectedSkills);
    };

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

                <SkillsSelector onSkillSelect={handleSkillSelect} />

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
                <button type="submit" >{!loading && "Upload" || loading && "uploading...!"}</button>
            </form>
        </div>
    );
};

export default NewProjectPage;
