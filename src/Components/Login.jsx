// src/pages/Login.js
import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/auth.css';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://agrobackend1.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();


      if (!response.ok) {
        setError(data.error || 'Login failed');
      } else {
        setUser(data.user); // Set user globally
        localStorage.setItem('user', JSON.stringify(data.user)); // optional
        if(data.user.role==="admin")
{

  navigate('/admin')
} else{

      navigate('/');
}
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <FaLeaf size={50} color="green" />
        <h2 className="auth-title">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
