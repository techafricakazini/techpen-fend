import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { appLinks } from "../constants/Links";
const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!response.ok) {
        throw new Error('Account creation failed');
      }

      alert('Account created successfully!');

      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    } catch (error) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className='text-bg-white p-3'>
    <div style={{ backgroundColor: '#F4F6F7', padding: '30px', maxWidth: '600px', margin: 'auto',fontSize:'600', flex:'center', borderRadius: '40px' }}>
      <h1 className='fs-2 color-#fff'>Create Account
      </h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleCreateAccount} style={{ padding: '20px', borderRadius: '40px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: 'black' }}>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: 'black' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: 'black' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: 'black' }}>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none',  color: 'black', cursor: 'pointer' }}>
            Create Account</button>
            <h4>Already have an account.  <Link to={appLinks?.Login}>Login </Link> </h4>
      </form>
    </div>
    </div>
  );
};

export default CreateAccount;
