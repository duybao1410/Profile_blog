import apiClient from '../../../services/apiClient';

export const postsApi = {
  getAllPosts: (params) =>
    apiClient.get('/posts', { params }),

  getPostById: (id) =>
    apiClient.get(`/posts/${id}`),

  createPost: (data) =>
    apiClient.post('/posts', data),

  updatePost: (id, data) =>
    apiClient.put(`/posts/${id}`, data),

  deletePost: (id) =>
    apiClient.delete(`/posts/${id}`),

  searchPosts: (query) =>
    apiClient.get('/posts/search', { params: { q: query } }),
};

export default postsApi;
