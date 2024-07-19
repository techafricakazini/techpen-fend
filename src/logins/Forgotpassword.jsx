import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { appLinks } from '../constants/Links';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Send a request to the backend to initiate password reset
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reset password email');
      }

      //  Handle successful request, like displaying a success message
      setMessage('Password reset instructions sent to your email.');

      // Reset form field and error state
      setEmail('');
      setError('');
    } catch (error) {
      setError('Failed to send reset password email. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#F4F6F7', padding: '20px', maxWidth: '400px',borderRadius: '20px', margin: 'auto' }}>
      <h2>Forgot Password</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleForgotPassword} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '20px', borderRadius: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: '#fff', color: '#333' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', color: 'black', cursor: 'pointer' }}>
            Send Reset Instructions</button>
            <h3>Return to <Link className='font-black' to={appLinks?.Login}>Login</Link></h3>
      </form>
    </div>
  );
};

export default ForgotPassword;
