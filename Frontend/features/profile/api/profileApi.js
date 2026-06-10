import apiClient from '../../../services/apiClient';

export const profileApi = {
  getUserProfile: () =>
    apiClient.get(`/profile`),
};

export default profileApi;
