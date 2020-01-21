import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.28.10.209:3333', // usando emulador 10.0.2.2:3333
});

export default api;
