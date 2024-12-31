import { useRef, useState, useEffect } from 'react';
import './style.scss';
import ReactQuill from 'react-quill';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux'
import axios from 'axios';

import ContactLinks from '../../components/contactLinks/ContactLinks';
import AddSkills from '../../components/addSkills/AddSkills'

const AdminDashboard = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const filePlaceholderRef = useRef(null);
  const [resume, setResume] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);
  const [initialData, setInitialData] = useState({});
  const [loading, setLoading] = useState(false);

  //token
  const token = useSelector(state => state.auth.token);

  const handleUpdateAdminApi = async (formData) => {
    try {
      const response = await axios.put(`https://nikhilsaiportfolio-1.onrender.com/api/v1/updateAdminData`, formData, {
        headers: {
          "Authorization": "bearer " + token,
          "Content-Type": "multipart/form-data",
        }
      });

      if (response.status !== 200) {
        return toast.error('something went wrong');
      }
      toast.success('updated the admin data');
    } catch (error) {
      console.log(error);
      toast.error('something went wrong.')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://nikhilsaiportfolio-1.onrender.com/api/v1/getAdmin`);

        if (response.status !== 200) {
          return toast.error('something went wrong unable to fetch data');
        }

        const data = response?.data?.data[0];

        setName(data?.name || '');
        setEmail(data?.email || '');
        setPhone(data?.phone || '');
        setRole(data?.role || '');
        setBio(data?.bio || '');
        setSocialLinks((JSON.parse(data?.social_links) || data?.social_links) || []);
        setResume(data?.profile_resume || null);
        setInitialData(data);

        toast.success('data fetched successfully')
      } catch (error) {
        toast.error('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDesc = (e) => {
    setBio(e);
  };

  const handleLinksUpdate = (updatedLinks) => {
    setSocialLinks(updatedLinks);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    if (file && filePlaceholderRef.current) {
      filePlaceholderRef.current.textContent = file.name;
    } else if (filePlaceholderRef.current) {
      filePlaceholderRef.current.textContent = 'No file chosen';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email)

    if (name !== initialData.name) formData.append('name', name);
    if (phone !== initialData.phone) formData.append('phone', phone);
    if (role !== initialData.role) formData.append('role', role);
    if (bio !== initialData.bio) formData.append('bio', bio);

    socialLinks.forEach((link, index) => {
      if (link.trim() !== initialData.socialLinks?.[index]) {
        formData.append('social_links', link);
      }
    });

    if (resume instanceof File) {
      formData.append('resume_url', resume);
    }

    handleUpdateAdminApi(formData);
    setEdit(false);
  };

  const openSelectedResume = () => {
    if (!resume) {
      toast.error('No resume found');
    } else {
      toast.success('Opening resume');
      window.open(resume, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1 className="title">Admin Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="info">
            <div className="input-div">
              {edit ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              ) : (
                <h4>{name || 'Enter Your Name'}</h4>
              )}
            </div>

            <div className="input-div">
              {edit ? (
                <input
                  type="email"
                  value={email}
                  readOnly
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              ) : (
                <h4>{email || 'Enter Your Email'}</h4>
              )}
            </div>

            <div className="input-div">
              {edit ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              ) : (
                <h4>{phone || 'Enter Your Phone Number'}</h4>
              )}
            </div>

            <div className="input-div">
              {edit ? (
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Enter your professional role"
                />
              ) : (
                <h4>{role || 'Enter your Professional Role'}</h4>
              )}
            </div>

            <div className="editorContainer">
              <label>Enter your Bio</label>
              <ReactQuill
                className="editor"
                theme="snow"
                value={bio}
                readOnly={!edit}
                onChange={handleDesc}
              />
            </div>

            <div className="file-upload-container">
              <div className="file-upload">
                <input
                  type="file"
                  name="resume_url"
                  id="image-upload"
                  onChange={handleFileChange}
                />
                <label htmlFor="image-upload">Choose resume</label>
              </div>
              <div ref={filePlaceholderRef} className="file-placeholder">
                {!resume && 'No file chosen'}
                {resume && (
                  <button type="button" onClick={openSelectedResume}>
                    View resume
                  </button>
                )}
              </div>
            </div>

            <ContactLinks onLinksChange={handleLinksUpdate} sLinks={socialLinks} />
          </div>
          {edit && (
            <button type="submit" className="submit-btn">
              {loading ? "submitting." : "Submit"}
            </button>
          )}
          {!edit && (
            <button
              type="button"
              onClick={() => setEdit(true)}
              className="edit-btn"
            >
              Edit
            </button>
          )}
        </form>
      )}
      <AddSkills/>
    </div>
  );
};

export default AdminDashboard;
