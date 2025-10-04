import axios from 'axios';

const API = axios.create({
  baseURL: "https://the-blog-backend.vercel.app", // ✅ Use your deployed backend URL
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
