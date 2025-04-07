// src/lib/config.ts

const isDev = process.env.NODE_ENV === 'development';

const API_BASE_URL = isDev
  ? 'http://localhost:5000' // 👈 your local backend
  : 'https://secure-slack-backend.vercel.app'; // 👈 your deployed backend

export default API_BASE_URL;
