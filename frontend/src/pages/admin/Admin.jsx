import { useState } from 'react';
import './style.scss';

import axios from 'axios';
import { toast } from 'react-hot-toast'

import { useDispatch } from 'react-redux';
import { login } from '../../slicer/authSlice/authSlice';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const sendLoginData = async (email, password) => {
    try {

      setLoading(true);

      if (!email || !password) {
        return toast.error('Please fill all the fields');
      }

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`, {
        email: email,
        password: password
      });

      if (response.status === 404) {
        setLoading(false);
        return toast.error('User not found');
      }

      if (response?.status === 200) {
        setData(response);
        toast.success('Login successful');

        const token = response?.data?.token;
        dispatch(login({ token }));
        localStorage.setItem('authToken', token);

        token = undefined;
      }
    } catch (error) {
      console.error(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
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
        <button type="submit" className="login-btn" onClick={handleLogin}>{loading && "Loggig In please Wait" || !loading && "Login"}</button>
      </div>
    </div>
  );
};

export default Admin;
