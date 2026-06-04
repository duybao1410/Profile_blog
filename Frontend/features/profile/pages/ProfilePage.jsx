import React from 'react';
//import './ProfilePage.css'; // Import CSS riêng cho trang Profile
import { Navbar } from '../../../componets/layout/Navbar';

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      < Navbar />
      <h1>Profile</h1>
      {/* Profile page content */}
    </div>
  );
};

export default ProfilePage;
