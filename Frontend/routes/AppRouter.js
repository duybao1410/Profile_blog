import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from '../features/posts/pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import PostDetailPage from '../features/posts/pages/PostDetailPage';
import CreatePostPage from '../features/posts/pages/CreatePostPage';
import EditPostPage from '../features/posts/pages/EditPostPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/create" element={<CreatePostPage />} />
        <Route path="/posts/:id/edit" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
