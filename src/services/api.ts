import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendbooktrack-production.up.railway.app',
});

export default api;
