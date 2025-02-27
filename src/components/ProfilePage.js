import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    username: 'Deepak',
    name: 'Deepak surya mani lakshman',
    bio: 'A passionate developer who loves coding and learning new technologies.',
    followers: 1234,
    following: 567,
    posts: 45,
    profileImage: '/wallpaper.jpg', // You can replace with your own image URL
    coverImage: '/wallpaper1.jpg', // You can replace with your own image URL
  });

  return (
    <div className="profile-container">
      <div className="cover-photo">
        <img src={userInfo.coverImage} alt="Cover" className="cover-image" />
      </div>

      <div className="profile-header">
        <div className="profile-pic-container">
          <img src={userInfo.profileImage} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{userInfo.name}</h1>
          <p className="profile-username">@{userInfo.username}</p>
          <p className="profile-bio">{userInfo.bio}</p>
          <div className="follow-info">
            <span>{userInfo.posts} Services</span>
            <span>{userInfo.followers} Followers</span>
            <span>{userInfo.following} Following</span>
          </div>
        </div>
      </div>

      <div className="profile-posts">
        <h2>Services</h2>
        <div className="posts-grid">
          {/* Add your images for posts here */}
          <div className="post">
            <img src="https://via.placeholder.com/150" alt="Post 1" />
          </div>
          <div className="post">
            <img src="https://via.placeholder.com/150" alt="Post 2" />
          </div>
          <div className="post">
            <img src="https://via.placeholder.com/150" alt="Post 3" />
          </div>
          {/* Add more posts as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
