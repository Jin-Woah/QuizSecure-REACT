// src/pages/login/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function LoginPage() {
  const navigate = useNavigate();

  // 🔐 Form input states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup

  // ✅ BACKEND GUIDE: LOGIN HANDLER
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password || !role) {
      alert('Please complete all fields');
      return;
    }

    /**
     * 🔧 BACKEND INTEGRATION:
     * Replace below logic with backend API call
     * Example (axios):
     * axios.post('/api/login', { username, password, role })
     *   .then(res => {
     *     // Save token if needed (res.data.token)
     *     // Redirect to dashboard
     *     if (role === 'student') navigate('/');
     *     else if (role === 'teacher') navigate('/teacher');
     *   })
     *   .catch(err => alert('Login failed'));
     */

    // TEMPORARY placeholder logic (no real login)
    if (role === 'student') navigate('/');
    else if (role === 'teacher') navigate('/teacher');
  };

  // ✅ BACKEND GUIDE: SIGNUP HANDLER
  const handleSignup = (e) => {
    e.preventDefault();

    /**
     * 🔧 BACKEND INTEGRATION:
     * Collect form inputs and send POST request to register user
     * Example:
     * axios.post('/api/signup', {
     *   name, username, password, role
     * }).then(res => {
     *   alert('Account created!');
     *   setIsSignup(false); // Go back to login
     * });
     */

    alert('Signup functionality will be connected to backend.');
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1 className="logo">QUIZSECURE</h1>
        <p className="subtitle">{isSignup ? 'Create an Account' : 'Secure Exam Access'}</p>

        {!isSignup ? (
          // ✅ LOGIN FORM
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <button type="submit">Login</button>
          </form>
        ) : (
          // ✍️ SIGNUP FORM (no logic yet)
          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <select>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <button type="submit">Sign Up</button>
          </form>
        )}

        <div className="divider"><span>OR</span></div>

        {/* 🔁 Toggle Login / Signup */}
        {!isSignup ? (
          <p className="signup">
            Don’t have an account? <a onClick={() => setIsSignup(true)} href="#">Sign up</a>
          </p>
        ) : (
          <p className="signup">
            Already have an account? <a onClick={() => setIsSignup(false)} href="#">Log in</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
