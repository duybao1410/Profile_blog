import apiClient from '../../../services/apiClient';

export const profileApi = {
  getUserProfile: (userId) =>
    apiClient.get(`/profile/${userId}`),

  updateUserProfile: (userId, data) =>
    apiClient.put(`/profile/${userId}`, data),

  getUserPosts: (userId, params) =>
    apiClient.get(`/profile/${userId}/posts`, { params }),

  uploadAvatar: (userId, file) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return apiClient.post(`/profile/${userId}/avatar`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

export default profileApi;
