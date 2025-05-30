import axios from 'axios';

export const signup = async (email, password) => {
  const response = await axios.post(`http://localhost:5000/api/auth/register`, { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`http://localhost:5000/api/auth/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
};