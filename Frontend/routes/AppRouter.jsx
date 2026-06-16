import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
//import HomePage from '../features/posts/pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import PostPage from '../features/posts/pages/PostPage';
import ProfilePage from '../features/profile/pages/ProfilePage';

export const AppRouter = () => {
  return (
<BrowserRouter>   
   <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog" element={<PostPage />} />
        <Route path="/about" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
