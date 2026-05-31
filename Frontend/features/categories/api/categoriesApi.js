import apiClient from '../../../services/apiClient';

export const categoriesApi = {
  getAllCategories: () =>
    apiClient.get('/categories'),

  getCategoryById: (id) =>
    apiClient.get(`/categories/${id}`),

  createCategory: (data) =>
    apiClient.post('/categories', data),

  updateCategory: (id, data) =>
    apiClient.put(`/categories/${id}`, data),

  deleteCategory: (id) =>
    apiClient.delete(`/categories/${id}`),
};

export default categoriesApi;
