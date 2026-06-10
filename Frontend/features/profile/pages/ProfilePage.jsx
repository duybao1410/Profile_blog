import React from 'react';
//import './ProfilePage.css'; // Import CSS riêng cho trang Profile
import { Navbar } from '../../../componets/layout/Navbar';
import AboutMe from './AboutMe/AboutMe';

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Navbar />
      <AboutMe />
    </div>
  );
};

export default ProfilePage;
