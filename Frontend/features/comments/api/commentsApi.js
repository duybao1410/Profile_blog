import apiClient from '../../../services/apiClient';

export const commentsApi = {
  getCommentsByPost: (postId) =>
    apiClient.get(`/comments/post/${postId}`),

  getCommentById: (id) =>
    apiClient.get(`/comments/${id}`),

  createComment: (data) =>
    apiClient.post('/comments', data),

  updateComment: (id, data) =>
    apiClient.put(`/comments/${id}`, data),

  deleteComment: (id) =>
    apiClient.delete(`/comments/${id}`),
};

export default commentsApi;
