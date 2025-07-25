import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const employeeAPI = {
  // Get all employees
  getAll: () => api.get('/employees'),
  
  // Get employee by ID
  getById: (id) => api.get(`/employees/${id}`),
  
  // Create new employee
  create: (data) => api.post('/employees', data),
  
  // Update employee
  update: (id, data) => api.patch(`/employees/${id}`, data),
  
  // Delete employee
  delete: (id) => api.delete(`/employees/${id}`),
  
  // Search by department
  searchByDepartment: (department) => api.get(`/employees?department=${department}`),
};

export default api;