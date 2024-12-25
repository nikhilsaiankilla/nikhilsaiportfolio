import { useState } from 'react';
import './style.scss';

import axios from 'axios';
import { toast } from 'react-hot-toast'

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendLoginData = async (email, password) => {
    try {

      setLoading(true);
      const requestData = {
        email: email,
        password: password
      };

      if (!email || !password) {
        return toast.error('Please fill all the fields');
      }

      const apiUrl = process.env.REACT_APP_BACKEND_BASE_URL + '/login';

      const response = await axios.post(apiUrl, requestData);

      if (response.status === 404) {
        setLoading(false);
        return toast.error('User not found');
      }

      if (response?.status === 200) {
          setData(response?.data);
          console.log(data);
          toast.success('Login successful');
      }
    } catch (error) {
      console.error('Error sending login data:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        toast.error(error.response.data.message);
      }
    }
    setLoading(false);
  };


  const handleLogin = (e) => {
    e.preventDefault();
    sendLoginData(email, password);
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Admin Login</h2>
        <div className="input-field">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Admin;
