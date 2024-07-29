import React, { useState, useEffect } from 'react';
import { appLinks } from '../constants/Links';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated profile to the server
    fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(data => {
        // Handle successful update, e.g., show a message or update state
        console.log('Profile updated:', data);
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  return (
    <div style={{ backgroundColor: '#F4F6F7', padding: '20px', maxWidth: '400px', borderRadius: '20px', margin: 'auto' }} >
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit} style={{ padding: '20px', borderRadius: '40px' }}>
        <div>
          <label style={{ color: 'black' }}>Username:</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          />
        </div>
        <br />
        <button type="submit" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none', color: 'black', cursor: 'pointer' }}>
          Update Profile</button>
      </form>
      <h3>Return to
        <button className='btn-success' style={{ padding: '10px', boxSizing: 'border-box', borderRadius: '15px', border: 'none' }}  >
          <Link className='text-white' to={appLinks?.Login}>Login<i class="bi bi-box-arrow-in-right"></i></Link>
        </button>
      </h3>
    </div>
  );
};

export default UserProfile;
