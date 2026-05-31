import apiClient from '../../../services/apiClient';

export const authApi = {
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),

  register: (userData) =>
    apiClient.post('/auth/register', userData),

  logout: () =>
    apiClient.post('/auth/logout'),

  getCurrentUser: () =>
    apiClient.get('/auth/me'),

  refreshToken: () =>
    apiClient.post('/auth/refresh-token'),
};

export default authApi;
