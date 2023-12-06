// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaylistGenerator from './PlaylistGenerator';
import Login from './Login'; 

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');
  const token = localStorage.getItem('spotifyAuthToken');
  
  const handleLogout = () => {
    localStorage.removeItem('spotifyAuthToken');
    navigate('/');
  };

  useEffect(() => {
    if (token) {
      fetchSpotifyData();
    }
  }, [token]);

  const fetchSpotifyData = async () => {
    // Example function to fetch data from Spotify API
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 401) {
        // Token expired
        localStorage.removeItem('spotifyAuthToken');
        return;
      }

    const data = await response.json();
    setUserName(data.display_name);
    // Set the user's profile image URL
    if (data.images && data.images.length > 0) {
        setUserImage(data.images[1].url); 
      }
    console.log(data); // Log the response for now
  };

  return (
    <div style={pageStyle}>
        <a style={{ padding: '20px' }} href="https://lizhagearty.vercel.app/"> 
      <i class="fas fa-star" style={{ color: 'white', fontSize: '24px' }}></i>
    </a>
      {token ? (
        <>
          <div style={cardStyle}>
            {userImage && <img src={userImage} alt="User Profile" style={imageStyle} />}
            {userName && <p>Hi, {userName}</p>}
            <button onClick={handleLogout}>Logout</button>
          </div>
          <PlaylistGenerator token={token} />
        </>
      ) : (
        <div style={cardStyle}><Login /></div>
      )}
    </div>
  );
};

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const cardStyle = {
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  margin: '10px',
  padding: '20px',
  textAlign: 'center',
  width: '300px' // Adjust as needed
};

const imageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%'
};

export default Home;
