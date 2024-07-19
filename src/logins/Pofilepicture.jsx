import React, { useState } from 'react';

const ProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Use FileReader to convert file to base64 string for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle form submission (if needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Upload profile picture to backend or update user profile
    console.log('Profile picture submitted:', profilePicture);
    // Reset profilePicture state after submission (if necessary)
    // setProfilePicture(null);
  };

  return (
    <div style={{backgroundColor: '#F4F6F7',padding: '20px', maxWidth: '400px',borderRadius: '20px', margin: 'auto'}}>
      <h1>Profile Picture</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginBottom: '30px' }}
        />
        {profilePicture && (
          <div style={{ marginBottom: '0px' }}>
            <img
              src={profilePicture}
              alt="Profile"
              style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
            />
          </div>
        )}
        <button type="submit" >Save Profile Picture</button>
      </form>
    </div>
  );
};

export default ProfilePicture;
