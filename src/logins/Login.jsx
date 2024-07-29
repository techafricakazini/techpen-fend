import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { appLinks } from '../constants/Links';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'password') {
      alert('Logged in successfully!');
      // without email you can not continue
      setEmail('');
      setPassword('');
      setError('');
    } else {
      // Failed login
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#F4F6F7', padding: '20px', borderRadius: '10px', width: '300px' }}>
        <h2 style={{ textAlign: 'center', color: '#17202A' }}>Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
            />
          </div>
          <h5><Link to={appLinks?.Forgotpassword}>Forgot password</Link></h5>
          <button type="submit" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: 'none', color: '#17202A', cursor: 'pointer' }}>
            Login</button>
            <h4>Don't have an account.<Link to={appLinks?.Register}> Sign Up</Link></h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
